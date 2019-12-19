import React from 'react';

const Recipe = ({ recipe }) => { 
  const { id, no_of_likes, recipe_image, recipe_title, time, author, price, difficulty }  = recipe;

return ( 
  <div className='recipe'> 
    {/* <img src={recipe_image} alt='an '/> */}
    <p>{no_of_likes}</p>
    {/* <img className='fork-icon' alt='an'/> */}
    <div className='info-card'>
      <p>{author}</p>
      <h2>{recipe_title}</h2>
      <p>{time}</p>
      <p>{price}</p>
      <p>{difficulty}</p>
    </div>
  </div>
)
}

export default Recipe;