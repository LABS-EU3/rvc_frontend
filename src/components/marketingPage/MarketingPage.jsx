import React from "react";
import { StyledDiv } from "./marketingPage.styles";
import food1 from "../../../src/images/dish1.jpg";
import two from "../../../src/images/two.png";
import three from "../../../src/images/three.png";

export default function MarketingPage() {
  return (
    <div className="App">
      <StyledDiv>
        <h1>Find Real recipes</h1>
        <div className="banner-image-section">
          <div className="banner-image">
            <img src={food1} alt="pic for food" />
          </div>
          <div className="recipe-details"></div>
        </div>
        <div className="button-section">
          <button>Start Here</button>
        </div>
        <div className="section-heading">
          <h1>Faster way to manage your recipes</h1>
        </div>
        <section className="recipe-steps">
          <article className="explore">
            <h2>EXPLORE <span><img style={{"width":"25%"}} src={two}/></span> </h2>
            <p>
              Discover hundreds of recipes based on the level of difficulty,
              your budget or time of preparation
            </p>
          </article>
          <article className="explore">
          <h2>INNOVATE <span><img style={{"width":"25%"}} src={two}/></span></h2>
            <p>
              Save - or FORK IT as we like to say - the recipe you like in your
              own personal cookbook. Edit every forked recipe to your own taste!
            </p>
          </article>
          <article className="explore">
          <h2><span><img style={{"width":"25%"}} src={three}/></span> CREATE</h2>
            <p>
              Create in 4 steps your own recipe and share it on your profile
              with your followers
            </p>
          </article>
        </section>

        <footer>
          <h3>About</h3>
          <h3>Team</h3>
          <h3>Contact</h3>

          <p>Terms & conditions | Privacy Policy</p>
        </footer>
      </StyledDiv>
    </div>
  );
}
