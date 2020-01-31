import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  Section3,
  EditDiv
} from "./EditRecipe.styles";

const EditRecipeOptions = () => { 


  return (
    <div>
          <Section3>
      <NavigationSection1>
            <Link to='/profile'>
              <CloseIcon  cgit style={{ fontSize: 40, color: 'white' }} />
            </Link>
        </NavigationSection1>
        <Addtitle>
       <h1>
        Edit recipe
        </h1>
        </Addtitle>
      </Section3>
      <Section2b>
          <EditDiv>
          <h3> 
            <Link to='/editrecipe'>Edit entire recipe</Link>
          </h3>
          <h3> 
            <Link to='/editrecipe/desc' >Update recipe description</Link>
          </h3>
          <h3> 
           <Link to='/editrecipe/img'>Upload new picture</Link>
          </h3>
          <h3> 
            <Link to='/editrecipe/ing'>Modify ingredients</Link>
          </h3>
          <h3>
            <Link to='/editrecipe/inst'>Modify instructions</Link>
          </h3>
          </EditDiv>
      </Section2b>
    
  </div>
)
}

export default EditRecipeOptions ;

