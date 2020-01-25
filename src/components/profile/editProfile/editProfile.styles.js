import styles from "styled-components";

export const StyledDiv = styles.div`

  font-size: 12px;

  .clear-icon {
    position: absolute;
    top: 8px;
    left: 5px;
    font-size: 36px;
  }

  .profile-photo {
    margin-top: 2rem;
  }

  .profile-pic {
    width: 30%;
    border-radius: 50%;
  }

  .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    top: 8px;
    font-size: 24px;
    background-color: #e5e5e5;  
    border-radius: 18px;
    border: 1px solid #cfcece;
  }  

  .modal > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }

  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }

  .modal > .actions {
    margin: auto;
  }

  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    text-align: center;
  }

`;
