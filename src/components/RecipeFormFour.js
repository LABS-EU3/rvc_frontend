import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  ProgressBarDiv,
  Section1,
  NavigationSection1,
  Addtitle,
  Title,
  Section2b,
  Step,
  ExportImg
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
      <div className="instruction-input">
        <input
          onChange={onHandleInstructionInput}
          type="text"
          name="text"
          value={instruction.text}
          placeholder="add instruction"
        />
         <button
        onClick={onAddInstruction}
        >
          +
        </button>
      </div>
      </form>
      <div>
        {
          instructions.map(item =>(
          <p>{item.step}. {item.text}</p>
          ))
        }
      </div>
      <Footer/>
    </div>

  )
}