import React from 'react';

const Recipe = ({ recipe }) => { 
  const { id, counter, recipe_image, title, time, author, price, difficulty }  = recipe;
// console.log(recipes);

return ( 
  <div className='recipe'> 
  
      <img src={recipe_image} alt='an '/>
    <p>{counter}</p>
    <img className='fork-icon' alt='an'/>
    <div className='info-card'>
      <p>{author}</p>
      <h2>{title}</h2>
      <p>{time}</p>
      <p>{price}</p>
      <p>{difficulty}</p>
    </div>
  </div>
)
}

export default Recipe;