import React from "react";
import styles from "styled-components";

/*
const Div = styles.div`
height: 70vh;
width: 70%;
margin: auto;
margin-top: 5rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover {
    cursor: pointer; 
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.image-container {
    box-shadow: 0 1px 17px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 60%;
    margin: 0 auto;
}
img {
   width: 80%; 
}
button {
    width: 30%;
    margin: 0 auto;
}
`;
*/

export default function Ready() {
  return (
    <div className="App">
      <h1>It's READY! </h1>
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwzk9us0OpvTp8XxAgvYAs3peCYVamG6PsGX_edQKrTPn1QBZz"
          alt="it's ready img"
        />
      </div>
      <button>Start</button>
    </div>
  );
}