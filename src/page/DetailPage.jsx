import styled from "styled-components";
import { useRecipe } from "../store/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

const DetailPage = () => {
  const { data } = useRecipe();

  const { id } = useParams();
  const recipe = data.find((item) => item.RCP_SEQ === id);

  const navigate = useNavigate();
  return (
    <Container>
      <Box>
        <Back
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoMdArrowRoundBack />
        </Back>
        <Card>
          <h1>{recipe.RCP_NM}</h1>
          <img src={recipe.ATT_FILE_NO_MAIN} alt="" />
          <Info>
            <p>{recipe.MANUAL01}</p>
            <p>{recipe.MANUAL02}</p>
            <p>{recipe.MANUAL03}</p>
            <InfoDetail>
              <p>
                <span>칼로리 : </span> {recipe.INFO_ENG}kcal
              </p>
              <p>
                <span>탄수화물 : </span>
                {recipe.INFO_CAR}g
              </p>
              <p>
                <span>단백질 : </span>
                {recipe.INFO_PRO}g
              </p>
              <p>
                <span>지방 : </span> {recipe.INFO_FAT}g
              </p>
              <p>
                <span>나트륨 : </span>
                {recipe.INFO_NA}mg
              </p>
            </InfoDetail>
            <p className="honey-tip">
              <span>꿀팁 : </span>
              {recipe.RCP_NA_TIP}
            </p>
          </Info>
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
  border-radius: 30px;
`;

const Back = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
  cursor: pointer;
`;

const Card = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .honey-tip {
    width: 100%;
    height: 30px;
    overflow-y: scroll;
  }
`;

const Info = styled.div`
  width: 50%;
  span {
    font-weight: 600;
  }
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
