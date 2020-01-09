import React, { useState } from "react";
import RecipeFormOne from "./RecipeFormOne";
import RecipeFormTwo from "./RecipeFormTwo";
import Ready from "./Ready";
import Footer from "./Footer";

export default function(props) {
  const [step, setStep] = useState(1);
  const nextPage = () => {
    setStep(step + 1 );
  }
  const prevPage = () => {
    setStep(step-1);
  }
//   const lastPage = () => {
//     setStep(3);
//   }
  switch (step) {
    case 1:
      return (
        <div className="App">
        <div>
          <RecipeFormOne step={step} nextPage={nextPage} />
        </div>
        <Footer />
      </div>
      )
    case 2:
      return (
        <div className="App">
          <div>
            <p>Hello from CreateRecipe 2</p>
            <RecipeFormTwo step={step} prevPage={prevPage} nextPage={nextPage}/>
          </div>
          <Footer />
        </div>
      );
      case 3:
      return (
        <div className="App">
          <div>
            <p>This is step three page</p>
            <Ready />
          </div>
          <Footer />
        </div>
      );
    default:
      return <p>Hello there</p>;
  }
}

