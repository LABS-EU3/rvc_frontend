import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  Title2,
  Section3,
  AddItem
} from "./EditRecipe.styles";

const EditRecipe = ({}) => { 
  return (
    <div>
          <Section3>
      <NavigationSection1>
            <Link to='/profile'>
              <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
            </Link>
        </NavigationSection1>
        <Addtitle>
       <h1>
        Edit recipe
        </h1>
        </Addtitle>
      </Section3>
      <Section2b>
          <h1>Edit entire recipe</h1>
          <h1>Upload recipe info</h1>
          <h1>Upload new picture</h1>
          <h1>Modify ingredients</h1>
          <h1>Modify instructions</h1>
      </Section2b>
    
  </div>
)
}

export default EditRecipe ;