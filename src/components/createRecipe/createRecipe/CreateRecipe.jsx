import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"
import Step1 from "../recipeForm/Step1";
import Step2 from "../recipeForm/Step2";
import Step3 from "../recipeForm/Step3";
import Step4 from "../recipeForm/Step4";
import Step5 from "../recipeForm/Step5";


function App(props) {

  const [page, setPage] = useState(1);

  const goForward = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1> Create Recipe </h1>
      {page === 1 && <Step1 goForward={goForward} />}
      {page === 2 && <Step2 goForward={goForward} />}
      {page === 3 && <Step3 goForward={goForward} />}
      {page === 4 && <Step4 goForward={goForward} />}
      {page === 5 && <Step5/>}

    </div>
  );
}

export default connect(state => state.newRecipe, dispatchers)(App);
