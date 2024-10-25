import { app } from "../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputStyle from "../components/InputStyle";
import FormStyle from "../components/FormStyle";
import ButtonStyle from "../components/ButtonStyle";
const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cancel, setCancel] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <h1>회원가입페이지</h1>
      <FormStyle onSubmit={handleSignUp}>
        <label htmlFor="email">이메일주소</label>
        <InputStyle
          id="email"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onEmail}
        />
        <label htmlFor="password">비밀번호 입력</label>
        <InputStyle
          id="password"
          type="password"
          placeholder="비밀번호8자리 이상"
          value={password}
          onChange={onPassword}
          min="8"
        />
        <ButtonStyle type="submit" width="420px">
          회원가입
        </ButtonStyle>
      </FormStyle>
      <ButtonStyle onClick={() => setCancel(true)} width="420px">
        취소
      </ButtonStyle>

      {cancel && (
        <Modal>
          <ModalContent>
            <p>취소할까요?</p>
            <div className="buttonWrap">
              <ButtonStyle onClick={() => navigate("/")} width="120px">
                예
              </ButtonStyle>
              <ButtonStyle onClick={() => setCancel(false)} width="120px">
                아니오
              </ButtonStyle>
            </div>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default SignUp;

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
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .buttonWrap {
    display: flex;
    gap: 10px;
  }
`;
