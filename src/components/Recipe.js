import React from 'react';
import '../App.css';

const Recipe = ({ recipe }) => { 
  console.log('AAA', recipe)
  
  const {
    recipe_title,
    author,
    time_required,
    difficulty,
    budget,
    image, 
  }  = recipe;
  
  console.log('bbb', author)
  let color = '';
  if (difficulty === 1) {
    color ='green';
  }
  else if (difficulty === 2) {
    color = 'orange';
  }
  else {
    color = 'red';
  }

// let letterS = 's'
// const name = 'James'
// let lastLetter = name.substr(-1)
// lastLetter === 's' ? '' : letterS 

const user = "James";
const lastLetter = user.substr(-1)
// const remLetters = user.substr(0, user.length-1)

const letterChange = (user) => {
  if (lastLetter === 's') { 
    return user + " ' " 
  }
  else { 
    return user + " 's "
  }
  // lastLetter === 's' ? user + "'" : user  + "'s"

}

return ( 
  <div className='box'> 
    {/* <div className='box'> */}
      <img className='recipe' src={image} alt='an '/>
      {/* <img className='recipe' src={recipe_image} alt='an '/> */}
    <div className='recipe-card'>
      {/* <p>{no_of_likes}</p> */}
      {/* <img className='recipe' alt='an'/> */}
      <p>{author}</p>
      {/* <p >{letterChange({author.JSON.stringify()})}</p> */}
      {/* <p>{author}'s</p> */}
      <h2>{recipe_title}</h2>
      <div className='recipe-card-tag'>
        <div>
          <p>{time_required} mins</p>
        </div>
        <div>
          <p>${budget}</p>
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