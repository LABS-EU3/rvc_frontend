import styled from "styled-components";

export const RecipeTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
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
  overflow: hidden;
  margin-top: -10%;
  margin-bottom: 2%;
  img {
    width: 100%;
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
  width: 81%;
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
