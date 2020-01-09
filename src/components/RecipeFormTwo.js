import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import foodplaceholder from "../images/foodplaceholder.png";

export default function RecipeFormTwo(props) {
  const { step, prevPage, nextPage } = props;
  const [recipeImage, setRecipeImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    console.log("files arary is ", files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "recipe_image");
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dr34bum3p/image/upload", data)
      .then(res => {
        setRecipeImage(res.data.secure_url);
        setLoading(false);
      })
      .catch(err => {
        console.log(
          "An error was encounterd while trying to upload this image",
          err
        );
      });
  };
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
          <img src={recipeImage || foodplaceholder } alt="recipe photo" />
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
