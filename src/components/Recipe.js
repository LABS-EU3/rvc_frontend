import React from 'react';
import '../App.css';

const Recipe = ({ recipe }) => { 
  // const { id, no_of_likes, recipe_image, recipe_title, time, author, price, difficulty }  = recipe;
  const { recipe_image, recipe_title, time, author, price, difficulty }  = recipe;

return ( 
  <div className='box'> 
    {/* <div className='box'> */}
      <img className='recipe' src={recipe_image} alt='an '/>
    <div className='recipe-card'>
      {/* <p>{no_of_likes}</p> */}
      {/* <img className='recipe' alt='an'/> */}
      <p>{author}'s</p>
      <h2>{recipe_title}</h2>
      <div className='recipe-card-tag'>
        <div>
          <p>{time}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div>
          <p>{difficulty}</p>
        </div>
      </div>
      </div>
  </div>

)
}


export default Recipe;