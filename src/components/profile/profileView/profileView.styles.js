import styled from "styled-components";

export const StyledProfile = styled.div`
  margin:2%;
  .profile-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    position: relative;

    .h4 {
      font-weight: 300;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height */
      display: flex;
      align-items: center;
      text-align: center;
    }
    .profile-img {
      border: 2px solid #0ab28a;
      width: 9rem;
      height: 9rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-top: 20%;
      margin-bottom: 2%;
      border-radius: 50%;
      background: white;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .num-likes-and-forks {
      // font-size: 1.6rem;
      width: 80%;
      margin: 0 auto;
      padding: 2rem 0;
      display: flex;
      justify-content: space-evenly;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      align-items: center;
      text-align: center;

      .likes-paragraph {
        font-size: 1.6rem;
      }
    }

    .profile-bio {
      font-size: 1.4rem;
      margin: 0 5rem 0 5rem;
    }

    .profile-icons {
      display: flex;
      justify-content: space-between;
      margin: 3rem 3rem 0 3rem;

      .vl {
        border-left:1px solid rgba(0, 0, 0, 0.16);
        height: 25px;
        left: 50%;
        margin-left: -3px;
        top: 0;
      }

      .profile-icons-image {
        height: 2.5rem;

      }
    }

    .hr {
      display: block;
      height: 1px;
      border: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin: 1em 0;
      padding: 0;
    }
    
    .container {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      margin-top: 1rem;
      overflow: auto;
      flex-wrap: wrap;
      padding-bottom: 3rem;

      font-size: 1.6rem;
      line-height: 26px;
      color: rgba(255, 48, 100, 0.9);

      .recipe-div {
        display: flex;
        max-height: 80%;

        .recipe-img-box {
          border-bottom-left-radius: 15px;
          border-top-right-radius: 0;
          height: 100%;
          box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
          font-size: 1rem;
        }

        .recipe-card {
          border-top-right-radius: 15px;
          border-bottom-left-radius: 0;
          height: 100%;
        }

      }
    }
  }
`;

export const Banner = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: flex-end;
  background-color: #0AB38A;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 2.7%;
  box-sizing: border-box;
  box-shadow: 0px 8px 30px #DAD9D9;
  justify-content: center;
  align-items:center;
  letter-spacing: 2px; 
  font-family: Varela Round;
  z-index: 3;
`;