import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../actions/actionCreators"
import Step1 from "./EditRecipeForm/Step1"
import Step2 from "./EditRecipeForm/Step2";
import Step3 from "./EditRecipeForm/Step3"
import Step4 from "./EditRecipeForm/Step4";
import Footer from "../navigation/footerNav/FooterNav"


const EditRecipe = ({match}) => { 

  const block =  match.params.block ? match.params.block.trim() : '';

  const [page, setPage] = useState(1);

  const goForward = e => {
    e.preventDefault();
    setPage(page + 1)
  }

  
  switch(block){
    case 'all':
      return (
        <div className="App">
        {page === 1 && <Step1 goForward={goForward} />}
        {page === 2 && <Step2 goForward={goForward} />}
        {page === 3 && <Step3 goForward={goForward} />}
        {page === 4 && <Step4 goForward={goForward} 
        />}
        <Footer></Footer>
      </div>
        )
    case 'desc':
    return (
      <div className="App">
      <Step1 goFoward={null}
      />
      <Footer></Footer>
      </div>
    )
    case 'img':
    return (
      <div className="App">
      <Step2 goFoward={null}
      />
      <Footer></Footer>
      </div>
    )
    case 'ing':
    return (
      <div className="App">
      <Step3 goFoward={null}
      />
      <Footer></Footer>
    </div>
    )
    case 'inst':
    return (
      <div className="App">
      <Step4 goFoward={null}
      />
      <Footer></Footer>
    </div>
    )
    
    default:
      return (
        <div className="App">
        {page === 1 && <Step1 goForward={goForward} />}
        {page === 2 && <Step2 goForward={goForward} />}
        {page === 3 && <Step3 goForward={goForward} />}
        {page === 4 && <Step4 goForward={goForward} 
        />}
        <Footer></Footer>
      </div>
      )
  }
}

export default connect(state => state.editRecipe, dispatchers)(EditRecipe)
