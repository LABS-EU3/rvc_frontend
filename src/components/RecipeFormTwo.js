import React from "react";
import { withFormik, Form, Field } from "formik";
import Footer from './Footer'

import foodplaceholder from '../images/foodplaceholder.png'


export default function RecipeFormTwo(props) {
    const { step, prevPage, nextPage } = props;

  return (
    <form>
      <div className="section1B">
        <button className="return back-arrow">
          <img src="" alt="" />
        </button>
        <h2>
          Recipe Name. Step is {step}
        </h2>
      </div>

      <div className="section1C">
        <input
          type="text"
          name="recipe"
          placeholder="add a photo of your 'recipe name' "
        />
        <button>
          <img src={foodplaceholder} alt="recipe photo" />
        </button>
        <div>
        <div className="step">
            Step {step}/3
          </div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        </div>
        <div className="progress-bar-container">    
        <div  style={{"backgroundColor":"#0AB28A", "height":"10px", "width":"60%", "borderRadius": "5px"}}></div>
        </div>

      </div>
    </form>
  );
}
