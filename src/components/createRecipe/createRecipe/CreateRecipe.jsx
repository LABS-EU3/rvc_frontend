import React, { useState, useEffect } from "react";
import RecipeFormOne from "../recipeForm/RecipeFormStep1";
import RecipeFormTwo from "../recipeForm/RecipeFormStep2";
import RecipeFormThree from "../recipeForm/RecipeFormStep3";
import Ready from "../RecipeConfirmCreation/RecipeConfirmCreation";
import Footer from "../../navigation/footerNav/FooterNav";
import { addToNewRecipe, submitNewRecipe } from "../../../actions/actionCreators";
import { connect } from "react-redux";
import axios from "axios";
import RecipeFormFour from "../recipeForm/RecipeFormStep4";

function CreateRecipe({ addToNewRecipe, ingredients, instructions, submitNewRecipe , title, recipe_category, recipe_file, tag,description,
  time_required,
  difficulty,
  budget, user_id, history }) {
  const [recipeImage, setRecipeImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const nextPage = () => {
    setStep(step + 1);
  ;;};
  const prevPage = () => {
    setStep(step - 1);
  };

  //form1

  const [formState, setFormState] = useState({
    title: '',
    recipe_category: '',
    recipe_file: '',
    tag: '',
    ingredients: [],
    instructions: []
  });
  const initialIngredient = {
    name: '',
    // quantity: '',
    // unit: ''
    }

  const initialInstruction = { 
    text: '',
    // step: 1
  }

  const [instructionState, setInstructionState] = useState({...initialInstruction})
  const [ingredientState, setIngredientState] = useState({...initialIngredient});

  const onHandleChange = e => {
    e.preventDefault()
   addToNewRecipe({
      [e.target.name]: e.target.value
    });
  };

  
  const onHandleIngredientInput = e => {
    e.preventDefault()
  setIngredientState({
    ...ingredientState,
      [e.target.name]: e.target.value
    });
  };

  const onHandleInstructionInput = e => {
    e.preventDefault()
  setInstructionState({
    ...instructionState,
      [e.target.name]: e.target.value
    });
  };


  const onAddIngredient = (e) => {
    e.preventDefault()
    addToNewRecipe({
      ingredients: [
        ...ingredients, 
        {...ingredientState}
      ]
    });
    setIngredientState({...initialIngredient})
    setStep(3)
  }

  const onAddInstruction = (e) => {
    e.preventDefault()
    addToNewRecipe({
      instructions: [
        ...instructions, 
        {...instructionState}
      ]
    });
    setInstructionState({...initialInstruction,
      //  step: instructionState.step + 1
      })
    setStep(4)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    console.log('ccc', e)
    // props.addToNewRecipe({ ...formState })
    nextPage()
  };

  const onHandleFinalSubmit = (e) => { 
    e.preventDefault()
    submitNewRecipe({
      recipes: {
        user_id,
      title,
      description,
      time_required,
      difficulty,
      budget,
      parent_id: 3,
      },
      recipe_categories: [
        {
          category_id: recipe_category
        }
      ],
      images: [
        {
        url: recipe_file,
        }
      ],
      ingredients,
      recipe_ingredients: [
        {
          ingredient_id : 1,
          quantity: 1,
          unit_id: 1
        }
      ],
      recipe_tags: [
        {
          tag_id: 1,
        }
      ],
      instructions,
      tags: [
        {
          name: tag
        }
      ],
     
    },
    history)
  }

  let UPLOAD_PRESET = "recipe_image";
  let CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dr34bum3p/image/upload";

  const uploadImage = async e => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", UPLOAD_PRESET);
    setLoading(true);
    axios
      .post(CLOUDINARY_API, data)
      .then(res => {
        const recipe_file = res.data.secure_url;

        // setRecipeImage(res.data.secure_url);
        addToNewRecipe( {
          recipe_file
        });
        console.log('MMMM',recipe_file)
        onHandleSubmit(e)
      })
      .catch(err => {
        console.log(
          "An error was encounterd while trying to upload this image",
          err
        );
      });
  };
 
  switch (step) {
    case 1:
      return (
        <div className="App">
          <div>
            <RecipeFormOne
              step={step}
              nextPage={nextPage}
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
              addToNewRecipe={addToNewRecipe}
            />
          </div>
          <Footer />
        </div>
      );
    
    case 2:
      return (
        <div className="App">
          <div>
            <RecipeFormTwo
              title={title}
              step={step}
              title={title}
              prevPage={prevPage}
              nextPage={nextPage}
              uploadImage={uploadImage}
              recipeImage={formState.recipe_file}
              loading={loading}
              onHandleChange={onHandleChange}
            />
          </div>
          <Footer />
        </div>
      );


    case 3:
      return (
        <div className="App">
          <div>

              <RecipeFormThree
              step={step}
              title={title}
              prevPage={prevPage}
              nextPage={nextPage}
              title={title}
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
              onHandleIngredientInput={onHandleIngredientInput}
              onAddIngredient={onAddIngredient}
              ingredients={ingredients}
              ingredient={ingredientState}

              />

          </div>
          <Footer />
        </div>
      );

      case 4:
      return (
        <div className="App">
          <div>
              <RecipeFormFour
              step={step}
              title={title}
              prevPage={prevPage}
              title={title}
              nextPage={nextPage}
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
              onHandleInstructionInput={onHandleInstructionInput}
              onAddInstruction={onAddInstruction}
              instructions={instructions}
              instruction={instructionState}
              onHandleFinalSubmit={onHandleFinalSubmit}
              />            
          </div>
          <Footer />
        </div>
      );

    case 5:
      return (
        <div className="App">
          <div>
            <p>This is step three page</p>
            <Ready
            history={history}
            />
          </div>
          <Footer />
        </div>
      );

    default:
      return <p>Hello there</p>;
  }
}
export default connect(state => ({...state.newRecipe, ...state.onboard }), {addToNewRecipe, submitNewRecipe} )(CreateRecipe);
