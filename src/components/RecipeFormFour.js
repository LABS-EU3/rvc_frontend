import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TextField, Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import {
  ProgressBarDiv,
  Section1,
  Section2,
  NavigationSection1,
  Addtitle,
  Title,
  Title2,
  AddItem
} from "../globals/form-styles";

export default function RecipeFormFour (props) { 
  const { history, title, step, prevPage, nextPage, onHandleChange, onHandleSubmit, onHandleInstructionInput, onAddInstruction, instruction, instructions, onHandleFinalSubmit } = props;
  
  return ( 
    // <div>
    //    <form
    //   onSubmit={onHandleFinalSubmit}

    //   >
    //      <div className="recipe-nav">
    //      <Section1>
    //   <NavigationSection1>
    //     <div
    //       onClick={prevPage}
    //       >
    //       <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
    //     </div>
    //     <button
    //     type='submit'
    //       >
    //       <CheckIcon cgit style={{ fontSize: 40, color: 'white' }} />
    //     </button>
    //   </NavigationSection1>
    //   <Addtitle>
    //     <h1>{title}</h1>
    //     </Addtitle>
    //   </Section1>
    <div>
    <form
    onSubmit={onHandleSubmit}
    >
 <Section1>
    <NavigationSection1>
      <div
        onClick={prevPage}
        >
        <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
      </div>
      <button
      type='submit'
        >
        <CheckIcon cgit style={{ fontSize: 40, color: 'white' }} />
      </button>
    </NavigationSection1>
    <Addtitle>
      <h1>{title}</h1>
      </Addtitle>
    </Section1>
    <Section2>
    <Title2> Add instruction </Title2>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Add instruction"
          helperText="click on the plus button to add your instruction!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={onHandleInstructionInput}
          type="text"
          name="text"
          value={instruction.text}
        />
         <button
        onClick={onAddInstruction}
        >
        <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
        </button>
        </Section2>
      </form>
      <Section2>
        {
          instructions.map(item =>(
            <AddItem>
              <p>{item.step}  {item.text}</p>
            </AddItem>
          ))
        }
          </Section2>
      <Footer/>
    </div>

  )
}