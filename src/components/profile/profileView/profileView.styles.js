import styled from "styled-components";

export const StyledProfile = styled.div`
  .profile-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;

    .profile-img {
      border: 2px solid #0ab28a;
      width: 15rem;
      height: 15rem;
      margin: 2px auto;
      border-radius: 50%;
      background: white;

      img {
        width: 100%;
        height: 100%;
      }
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
        /* background-color: rgb(0, 172, 238); */
        padding: 0 12px;
      }
    }
    
    .container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      /* overflow: auto; */
    }
  }
`;