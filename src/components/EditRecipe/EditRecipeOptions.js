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
          <h1> 
            <Link to='/editrecipe/:id/all'>Edit entire recipe</Link>
          </h1>
          <h1> 
            <Link to='/editrecipe/:id/desc' >Update recipe description</Link>
          </h1>
          <h1> 
           <Link to='/editrecipe/:id/img'>Upload new picture</Link>
          </h1>
          <h1> 
            <Link to='/editrecipe/:id/ing'>Modify ingredients</Link>
          </h1>
          <h1>
            <Link to='/editrecipe/:id/inst'>Modify instructions</Link>
          </h1>
          </EditDiv>
      </Section2b>
    
  </div>
)
}

export default EditRecipeOptions ;

