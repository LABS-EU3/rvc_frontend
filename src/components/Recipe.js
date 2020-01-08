import React from 'react';
import '../App.css';

const Recipe = ({ recipe }) => { 
  const { recipe_image, recipe_title, time, author, price, difficulty }  = recipe;

  let color = '';
  if (difficulty === 'S') {
    color ='green';
  }
  else if (difficulty === 'M') {
    color = 'orange';
  }
  else {
    color = 'red';
  }

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
          <p style={{backgroundColor:color}} className='level-recipe'>{difficulty}</p>
        </div>
      </div>
      </div>
  </div>

)
}


export default Recipe;