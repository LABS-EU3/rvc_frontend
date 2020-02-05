import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { Link, useParams } from "react-router-dom";
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  Section3,
  EditDiv
} from "./EditRecipe.styles";

const EditRecipeOptions = () => { 

const recipeID = useParams().id.trim();
  return (
    <div>
          <Section3>
      <NavigationSection1>
            <Link to={`/recipes/${recipeID}`}>
              <CloseIcon  cgit style={{ fontSize: 40, color: 'white' }} />
            </Link>
        </NavigationSection1>
        <Addtitle>
       <h1>
        Edit recipe
        </h1>
        </Addtitle>
      </Section3>
      <Section2b>
          <EditDiv>
          <h1> 
            <Link to={`/editrecipe/${recipeID}/all`}>Edit entire recipe</Link>
          </h1>
          <h1> 
            <Link to={`/editrecipe/${recipeID}/desc`}>Update recipe description</Link>
          </h1>
          <h1> 
           <Link to={`/editrecipe/${recipeID}/img`}>Upload new picture</Link>
          </h1>
          <h1> 
            <Link to={`/editrecipe/${recipeID}/ing`}>Modify ingredients</Link>
          </h1>
          <h1>
            <Link to={`/editrecipe/${recipeID}/inst`}>Modify instructions</Link>
          </h1>
          </EditDiv>
      </Section2b>
    
  </div>
)
}

export default EditRecipeOptions ;

