import styles from 'styled-components';

export const StyledDiv = styles.div`
margin-top: 1.3rem;
font-size: 1.6rem;
text-align: left;
padding: 0.5rem 1rem;
height: 7rem;
background: rgba(255, 48, 100, 0.9);
border-radius: 10px;
p {
    margin-bottom: 4px;
}
.view-btn {
    font-size: 1.1rem;
    font-weight: bolder;
    padding: 0;
    border: none;
    background: none; 
    margin-right: 5px;  
  }
.continue-btn {
    font-size: 1.1rem;
    font-weight: bolder;
    border: 1px solid #FFF;
    background-color: inherit;
    box-sizing: border-box;
    border-radius: 15px;
}
`