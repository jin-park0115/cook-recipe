import styled from "styled-components";
import { useState } from "react";
import { useRecipe } from "../store/RecipeContext";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { data } = useRecipe();

  const { id } = useParams();
  const recipe = data.find((item) => item.RCP_SEQ === id);
  console.log(recipe);
  return (
    <Container>
      <Box>
        <Card>
          <h1>{recipe.RCP_NM}</h1>
          <img src={recipe.ATT_FILE_NO_MAIN} alt="" />
          <p>{recipe.MANUAL01}</p>
          <p>{recipe.MANUAL02}</p>
          <p>{recipe.MANUAL03}</p>
          <p>칼로리 : {recipe.INFO_ENG}kcal</p>
          <p>탄수화물 : {recipe.INFO_CAR}g</p>
          <p>단백질 : {recipe.INFO_PRO}g</p>
          <p>지방 : {recipe.INFO_FAT}g</p>
          <p>나트륨 : {recipe.INFO_NA}mg</p>
          <p>꿀팁 : {recipe.RCP_NA_TIP}</p>
        </Card>
      </Box>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 30px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
  border-radius: 30px;
`;

const Card = styled.div`
  padding: 20px;
`;
