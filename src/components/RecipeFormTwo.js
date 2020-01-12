import React from "react";
import foodplaceholder from "../images/foodplaceholder.png";

export default function RecipeFormTwo(props) {
  const { step, prevPage, nextPage, uploadImage, recipeImage } = props;  
  
  return (
    <form>
      <div className="section1B">
        <button className="return back-arrow">
          <img src="" alt="" />
        </button>
        <h2>Recipe Name. Step is {step}</h2>
      </div>
      <div className="section1C">
        <input
          type="file"
          name="recipefile"
          placeholder="upload an image"
          onChange={uploadImage}
        />
        <button>
          <img src={recipeImage || foodplaceholder} alt="A display of the already finished recipe" />
        </button>
        <div>
          <div className="step">Step {step}/3</div>
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
        <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: "60%",
              borderRadius: "5px"
            }}
          ></div>
        </div>
      </div>
    </form>
  );
}
