import styled from "styled-components";

export const RecipeTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const TopButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  text-align: center;
  font-size: 16px;

  h1 {
    margin-top: 7px;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const ForkButton = styled.div`
  width: 90px;
  height: 35px;
  background: rgba(255, 48, 100, 0.8);
  border-radius: 5px;
`;

export const ShareButton = styled.div`
  width: 90px;
  height: 35px;
  background: rgba(182, 182, 182, 0.6);
  border-radius: 5px;
`;

export const ImgRecipe = styled.div`
  width: 100%;
  height: 372px;
  margin-bottom: 4rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

export const DetailsRecipe = styled.div`
  background: rgba(196, 196, 196, 0.12);
  border-radius: 15px;
  text-align: start;
  padding-left: 2rem;
  width: 80%;
  font-size: 2rem;
`;

export const ProfilePicture = styled.div`
  border-radius: 50px;
  width: 53px;
  height: 55px;
  object-fit: scale-down;
  overflow: hidden;
  border: 2px solid rgba(196, 196, 196, 0.12);
  background-color: #d88524;
  h1 {
    margin-top: 12px;
    font-size: 18px;
  }
`;

export const BottomButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  height: 24vh;
`;

export const LgButton = styled.div`
  height: 41px;
  margin: 2%;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  background: rgba(10, 179, 138, 0.74);
  border-radius: 9px;
  color: white;
`;

// Recipe Card:
export const StyledRecipe = styled.div`
  /* background-color: black; */
  overflow: hidden;
  break-inside: avoid;
  width: 100%;
  padding: 10px;
  
  .recipe-img-box {
    border-radius: 9px;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    border-radius: 9px;
    overflow: hidden;
    /* border: 1px solid green; */

    img {
      width: 100%;
      height: 100%;
    }
    
    .overlay {
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
  
      display: flex;
      flex-direction: row-reverse;
  
      border-radius:9px;
      /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  
      .card-button {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
  
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  a:last-of-type {
    .recipe-card {
      background: rgba(196, 196, 196, 0.12);
      border-radius: 15px;
      text-align: start;
      padding: 2vh;
      margin-top: 2vh;

      .recipe-card-tag {
        display: flex;
        justify-content: space-between;
        margin-right: 45px;

        .level-recipe {
          color: transparent;
          border: 1px solid;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          background-color: red;
        }

        p {
          margin: 5px 0 0;
          padding: 0 0 10px;
          font-size: 16px;
        }
      }
    }
  }
`;
