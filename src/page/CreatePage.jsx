import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../components/ButtonStyle";
import TextArea from "../components/TextArea";

const CreatePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <ImgBox>
          <p>img받는곳</p>
        </ImgBox>
        <label htmlFor="title">요리이름</label>
        <TextArea id={"title"} height={"50px"} />
        <label htmlFor="ingrediunt">재료</label>
        <TextArea id={"ingrediunt"} height={"200px"} />
        <label htmlFor="recipe">레시피</label>
        <TextArea id={"recipe"} height={"400px"} />
      </Box>
      <div className="btnWrap">
        <ButtonStyle type={"submit"} width={"200px"}>
          등록
        </ButtonStyle>
        <ButtonStyle
          onClick={() => {
            navigate(-1);
          }}
          width={"200px"}
        >
          취소
        </ButtonStyle>
      </div>
    </Container>
  );
};

export default CreatePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d92f4;
  padding-bottom: 10px;
  .btnWrap {
    display: flex;
    gap: 10px;
  }
`;

const Box = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 3px 5px 0px #111;
`;

const ImgBox = styled.div`
  height: 300px;
  border: 1px solid #222;
  border-radius: 5px;
`;
