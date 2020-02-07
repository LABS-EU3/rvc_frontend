import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StyledDiv, } from "./marketingPage.styles";
import dish1 from "../../../src/images/dish1.jpg";
import dish2 from "../../../src/images/dish2.jpg";
import dish3 from "../../../src/images/dish3.jpg";
import left from "../../../src/images/left.png";
import right from "../../../src/images/right.png";
import one from "../../../src/images/one.png";
import two from "../../../src/images/two.png";
import three from "../../../src/images/three.png";
import { Link } from "react-router-dom";

export default function MarketingPage() {
  return (
    <div>
      <StyledDiv> 
      <div className="menu-container">
        <div className="logo">
         <h1>FORKBOOK</h1>
        </div>        
        <div className="subMenu">
          <div className="text1"> 
            <h1>Recipes</h1>
          </div>
          <div className="text1">
            <h1> Sign in</h1>
          </div>
        </div>
      </div>
        <h1 className="header">Find real recipes and create your own cookbook</h1>

        <div className="banner-image-section">
          <Carousel
            stopOnHover={false}
            centerMode={true}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            showArrows={true}
            style={{ "background-color": "white" }}
          >
            <div className="banner-image">
              <img src={dish1} alt="pic for food" />
            </div>
            <div className="banner-image">
              <img src={dish2} alt="pic for food" />
            </div>
            <div className="banner-image">
              <img src={dish3} alt="pic for food" />
            </div>
          </Carousel>
          <div className="recipe-card">
            <p>Chelsea's</p>
            <h2>Kaldereta</h2>
            <div>
              <span>$$$$</span>
              <span>Simple</span>
              <span className="time-taken">5 mins</span>
            </div>
          </div>
        </div>
        <div className="button-section">
          <Link to="/register">
            <button>Start Here</button>
          </Link>
        </div>
        {/* <div className="section-heading">
          <h1>A faster way to manage your recipes</h1>
        </div> */}
        <section className="recipe-steps">
          <article className="explore">
            <h2>
              <div className="number-images">
                <img alt="number pic" src={one} />
              </div>
              EXPLORE{" "}
            </h2>
            <p>
              Discover hundreds of recipes based on the level of difficulty,
              your budget or time of preparation
            </p>
          </article>
          <article className="explore">
            <h2>
              <div className="number-images">
                <img alt="number pic" src={two} />
              </div>{" "}
              SAVE 
            </h2>
            <p>
              Save - or FORK IT as we like to say - the recipe you like in your
              own personal cookbook. Edit every forked recipe to your own taste!
            </p>
          </article>
          <article className="explore">
            <h2>
              <div className="number-images">
                <img alt="number pic" src={three} />
              </div>{" "}
              CREATE
            </h2>
            <p>
              In 4 simple steps, create your own recipe and share it on your
              profile with your followers
            </p>
          </article>
        </section>

        <footer>
          <p>Terms & conditions | Privacy Policy</p>
        </footer>
      </StyledDiv>
    </div>
  );
}
