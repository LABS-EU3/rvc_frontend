import React from 'react';
import '../App.css';

const Recipe = ({ recipe }) => { 
  const { id, no_of_likes, recipe_image, recipe_title, time, author, price, difficulty }  = recipe;

return ( 
  <div className='box'> 
    {/* <div className='box'> */}
      <img className='recipe' src={recipe_image} alt='an '/>
      {/* <div> */}
    <div className='recipe-card'>
      {/* <p>{no_of_likes}</p> */}
      {/* <img className='recipe' alt='an'/> */}
      <p>{author}</p>
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
    {/* </div> */}
  </div>

)
}


{/* <div class='container'>
  <div class='box'>
    <img src='img1'>
    <div>
      <h2>title</h2>
      <p>stufff stuffff </p>
    </div>
  </div>

  <div class='box'>
    <img src='img1'>
    <div>
      <h2>title</h2>
      <p>stufff stuffff </p>
    </div>
  </div>

  <div class='box'>
    <img src='img1'>
    <div>
      <h2>title</h2>
      <p>stufff stuffff </p>
    </div>
  </div>
</div>




<div className='item'> 
<img src={recipe_image} alt='an '/>
<p>{no_of_likes}</p>
<img className='fork-icon' alt='an'/>
<div className='info-card'>
  <p>{author}</p>
  <h2>{recipe_title}</h2>
  <p>{time}</p>
  <p>{price}</p>
  <p>{difficulty}</p>
</div>
</div> */}


export default Recipe;