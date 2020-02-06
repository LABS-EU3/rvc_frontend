// The below styles aren't doing *anything*! Were they supposed to replace the styles in App.css?
// Because some of those are missing from here...

// import styled from "styled-components";

// export const MenuToggle = styled.div`
//   display: block;
//   position: absolute;
//   top: 23px;
//   right: 11px;
//   z-index: 1;
//   -webkit-user-select: none;
//   user-select: none;

//   input {
//     display: block;
//     width: 40px;
//     height: 32px;
//     position: absolute;
//     top: -7px;
//     left: -5px;
//     cursor: pointer;
//     opacity: 0;
//     z-index: 2;
//   }

//   input:checked ~ ul {
//     transform: scale(1, 1);
//     opacity: 1;
//   }

//   input:checked ~ span {
//     opacity: 1;
//     transform: rotate(45deg) translate(-2px, -1px);
//     background: #232323;
//   }

//   input:checked ~ span:nth-last-child(2) {
//     opacity: 1;
//     transform: rotate(-45deg) translate(0, -1px);
//   }

//   input:checked ~ span:nth-last-child(3) {
//     opacity: 0;
//     transform: rotate(0deg) scale(0.2, 0.2);
//   }

//   span {
//     display: block;
//     width: 33px;
//     height: 4px;
//     margin-right: 7px;
//     margin-bottom: 5px;
//     position: relative;
//     background: #cdcdcd;
//     border-radius: 3px;
//     z-index: 1;
//     transform-origin: 4px 0px;
//     transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
//       background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
//   }

//   span:first-child {
//     transform-origin: 0% 0%;
//   }

//   span:nth-last-child(2) {
//     transform-origin: 0% 100%;
//   }
//   `;
  
// export const Menu = styled.div`
//   position: absolute;
//   width: 320px;
//   margin: -50px 0 0 0;
//   padding-top: 125px;
//   right: -50%;
//   height: 100vh;
//   background: white;
//   list-style-type: none;
//   -webkit-font-smoothing: antialiased;
//   transform-origin: 0% 0%;
//   transform: translate(100%, 0);
//   transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) li {
//     padding: 10px 0;
//     font-size: 22px; */
//   }

//   a li:hover {
//     background-color: #0ab28a;
//     color: white;
//   }
// `;
