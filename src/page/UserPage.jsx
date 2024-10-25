import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../components/ButtonStyle";
import { IoMdArrowRoundBack } from "react-icons/io";

const UserPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userID");
  const handleLogOut = () => {
    alert("로그아웃 합니다.");
    navigate("/");
    localStorage.clear();
  };
  return (
    <Container>
      <h1>유저 페이지</h1>
      <Wrap>
        {userId === null ? (
          <LoginCon>
            <p>로그인 페이지로 가시겠습니까?</p>
            <div className="buttonWrap">
              <ButtonStyle
                onClick={() => {
                  navigate("/login");
                }}
                width="200px"
              >
                네
              </ButtonStyle>
              <ButtonStyle
                onClick={() => {
                  navigate("/");
                }}
                width="200px"
              >
                아니오
              </ButtonStyle>
            </div>
          </LoginCon>
        ) : (
          <>
            <BackArrow onClick={() => navigate(-1)} />
            <UserBox>
              <Title>{userId} 님 반갑습니다</Title>
              <BoxWrap>
                <Box src="/src/assets/sample.jpeg"></Box>
                <Box src="/src/assets/sample.jpeg"></Box>
                <Box src="/src/assets/sample.jpeg"></Box>
              </BoxWrap>
              <ButtonStyle onClick={handleLogOut}>로그아웃</ButtonStyle>
            </UserBox>
          </>
        )}
      </Wrap>
    </Container>
  );
};

export default UserPage;

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: #77cdff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
`;

const Wrap = styled.div`
  width: 80%;
`;

const UserBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const BoxWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 80%;
  border: 1px solid black;
  padding: 20px;
`;

const Box = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .buttonWrap {
    display: flex;
    gap: 10px;
  }
`;

const BackArrow = styled(IoMdArrowRoundBack)`
  position: absolute;
  top: 0;
  cursor: pointer;
  font-size: 2rem;
  padding: 20px;
`;
