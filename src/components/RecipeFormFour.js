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
  AddItem,
  Step
} from "../globals/form-styles";

export default function RecipeFormFour (props) { 
  const { history, step, prevPage, title, nextPage, onHandleChange, onHandleSubmit, onHandleInstructionInput, onAddInstruction, instruction, instructions, onHandleFinalSubmit } = props;
  
  return ( 
    // <div>
    //    <form
    //   onSubmit={onHandleFinalSubmit}

    //PREVIOUS CODE BLOCK
      // >
      //    <div className="recipe-nav">
      //   <div
      //     className="back-arrow-container"
      //     onClick={prevPage}
      //   >
      //     <img className="back-arrow" src={back} alt="back arrow" />
      //   </div>
      //   <button
      //     type='submit'
      //     onClick={onHandleFinalSubmit}
      //     className="submit-recipe-container"
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
    //PREVIOUS CODE BLOCK  END

    <div>
    <form
    onSubmit={onHandleFinalSubmit}
    >
 <Section1>
    <NavigationSection1>
      <div
        onClick={prevPage}
        >
        <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
      </div>
      {/* PREVIOUS CODE BLOCK */}
      {/* <h2>{ title } Step is {step}</h2>
      <div className="instruction-input">
        <input */}
      {/* PREVIOUS CODE BLOCK END */}
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
         <div
        onClick={onAddInstruction}
        style={{"margin" : "0 auto"}}

        >
        <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
        </div>
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
         <Step >
            Step {step}/4
          <ProgressBarDiv>
          <div className="progress">
          ></div>
          </ProgressBarDiv>
          </Step >
        </Section2>
      <Footer/>
    </div>

  )
}