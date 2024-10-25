import styled from "styled-components";

const FormStyle = ({ onSubmit, children }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default FormStyle;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
