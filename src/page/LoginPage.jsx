import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import FormStyle from "../components/FormStyle";
import styled from "styled-components";
import InputStyle from "../components/InputStyle";
import ButtonStyle from "../components/ButtonStyle";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const localStoreExpired = (key, value, expiredMinutes) => {
    const time = new Date();
    const item = {
      value: value,
      expiry: time.getTime() + expiredMinutes * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStoreExpired("userID", email, 30); // 30분
      alert("로그인 되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case "auth/invalid-email":
        setErrorMessage("유효하지 않은 이메일 형식.");
        break;
      case "auth/invalid-credential":
        setErrorMessage("등록되지 않은 이메일 또는 비밀번호");
        break;
      case "auth/missing-password":
        setErrorMessage("비밀번호를 입력해주세요.");
    }
  };

  const onEmail = (e) => setEmail(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  return (
    <Container>
      <h1>로그인 페이지</h1>
      <FormStyle onSubmit={onLogin}>
        <InputStyle type="id" onChange={onEmail} placeholder="이메일" />
        <InputStyle
          type="password"
          onChange={onPassword}
          placeholder="비밀번호"
        />
        <div className="buttonWrap">
          <ButtonStyle
            onClick={() => {
              navigate("/signup");
            }}
            width="220px"
          >
            회원가입
          </ButtonStyle>
          <ButtonStyle type="submit" width="220px">
            로그인
          </ButtonStyle>
        </div>
      </FormStyle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  border: 1px solid #222;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .buttonWrap {
    display: flex;
    gap: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;
