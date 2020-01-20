import styled from "styled-components";

export const StyledProfile = styled.div`
  .profile-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;

    .profile-img {
      text-align: center;
      border: 1px solid black;
      width: 26%;
      height: 20%;
      margin: 2px auto;
      border-radius: 50%;
      color: white;
      background-color: #0ab28a;
    }

    .num-likes-and-forks {
      font-size: 2.2rem;
      width: 80%;
      margin: 0 auto;
      padding: 2rem 0;
      display: flex;
      justify-content: space-evenly;

      .likes-paragraph {
        font-size: 1.6rem;
      }
    }

    .profile-bio {
      font-size: 1.4rem;
    }

    .profile-icons {
      display: flex;
      justify-content: space-between;
      margin: 3rem 3rem 0 3rem;

      .profile-icons-image {
        height: 2.5rem;
      }
    }
    
    .divider-wrapper {
      margin-bottom: 0.3rem;
      padding: 0 2.4rem;

      #divider {
        border-width: 1px;
        background-color: rgb(0, 172, 238);
        padding: 0 12px;
      }
    }
    
    .profile-food {
      margin-bottom: 6rem;

      .profile-recipe-image {
        width: 45%;
        height: 100%;
        margin: 0 2px;
      }
    }
  }
`;