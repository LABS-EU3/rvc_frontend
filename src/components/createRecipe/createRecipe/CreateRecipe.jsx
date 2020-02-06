import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"
import Step1 from "../recipeForm/Step1";
import Step2 from "../recipeForm/Step2";
import Step3 from "../recipeForm/Step3";
import Step4 from "../recipeForm/Step4";
import Step5 from "../recipeForm/Step5";
import Footer from "../../navigation/footerNav/FooterNav";

function App(props) {

  const [page, setPage] = useState(1);

  const goForward = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  const goBackward = e => {
    setPage(page - 1);
  };

  return (
    <div className="App">
      {page === 1 && <Step1 goForward={goForward} goBackward={goBackward} />}
      {page === 2 && <Step2 goForward={goForward} goBackward={goBackward} />}
      {page === 3 && <Step3 goForward={goForward} goBackward={goBackward} />}
      {page === 4 && <Step4 goForward={goForward} goBackward={goBackward} />}
      {page === 5 && <Step5 goBackward={goBackward} {...props}/>}
      <Footer></Footer>
    </div>
  );
}

export default connect(state => state.newRecipe, dispatchers)(App);
