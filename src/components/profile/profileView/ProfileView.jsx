import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

import Footer from "../../navigation/footerNav/FooterNav";
import EditProfile from "../editProfile/EditProfile";
import Recipe from '../../recipe/Recipe';

import bookmark from "../../../globals/design-elements/bookmark.png";
import more from "../../../globals/design-elements/more.png";
import copy from "../../../globals/design-elements/copy-item.png";

import { StyledProfile } from './profileView.styles';
import profilePlaceholderImage from '../../../images/profile_placeholder_1.png';
// import profilePlaceholderImage from '../../../images/profile_placeholder_2.png';
// Not sure which is nicer!


export function ProfileView(props) {
  const { 
    profile_pic,
    username,
    first_name,
    last_name,
    bio,
    user_recipes,
    liked_recipes,
    forked_recipes_count,
    recipe_count,
    recipes_forked_count,
  } = props;

  // Need to do this as the Recipe component expects recipe objects of the following form:
  const sanitiseRecipes = recipes => {
    return recipes.map(recipe => ({
      id: recipe.id,
      recipe_title: recipe.recipe_title,
      author: recipe.author,
      time_required: recipe.time_required,
      difficulty: recipe.difficulty,
      budget: recipe.budget,
      imageUrl: recipe.images[0]
    }));
  };

  const sanitisedUserRecipes = sanitiseRecipes(user_recipes);
  const sanitisedLikedRecipes = sanitiseRecipes(liked_recipes);

  const [selectedRecipes, setSelectedRecipes] = useState('created');

  const switchSelectedRecipes = selected => {
    selected === 'created' ? 
      setSelectedRecipes('created') :
      setSelectedRecipes('forked');
  };

  return (
    <>
      <StyledProfile>
        <div className="profile-container">
  
          <div className="profile-img">
            {
              (profile_pic !== "" &&
              <img src={profile_pic} alt="default profile" />) ||
              <img src={profilePlaceholderImage} alt="default profile"/>
            }
          </div>

          <Popup modal trigger={<h4>@{username}</h4>}>
            {close => <EditProfile close={close} />}
          </Popup>

          <div className="name">
            <p>{first_name + " " + last_name}</p>
          </div>

          <div className="num-likes-and-forks">
            <div>
          <p className="recipes">{recipe_count}</p>
              <h4>Recipes</h4>
            </div>
            <div>
          <p className="forked-recipes">{recipes_forked_count}</p>
              <h4>Forked Recipes</h4>
            </div>
            <div>
              <p className="forks">{forked_recipes_count}</p>
              <h4>Forks</h4>
            </div>
          </div>
        <p className="profile-bio">{bio}</p>
          <div className="profile-icons">
            <img className="profile-icons-image" src={copy} alt="" onClick={() => switchSelectedRecipes('created')} />
            <img className="profile-icons-image" src={bookmark} alt="" onClick={() => switchSelectedRecipes('forked')}/>
            <Link to='/createrecipe'>
            <img className="profile-icons-image" src={more} alt="" />
            </Link>
          </div>

          <div className="divider-wrapper">
            {" "}
            <hr id="divider" />
          </div>

          {(selectedRecipes === 'created' && 
            (
              sanitisedUserRecipes.length === 0 ?
                <div className="container">
                  <p>
                    Recipes you create appear here!
                  </p>
                </div> : 
                <div className="container">
                  {sanitisedUserRecipes.map(recipe => (
                    <Recipe key={recipe.id} recipe={recipe} />
                  ))}
                </div>
            )
          )
          ||
          (selectedRecipes === 'forked' &&
            (
              sanitisedLikedRecipes.length === 0 ?
              <div className="container">
                <p>
                  Recipes you 'fork' appear here!
                </p>
              </div> :
              <div className="container">
                {sanitisedLikedRecipes.map(recipe => (
                  <Recipe key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) 
          )}

        </div>
      </StyledProfile>

      <Footer />
    </>
  );
}

export default connect(state => ({...state.profile, username: state.onboard.username}), actionCreators)(ProfileView);
