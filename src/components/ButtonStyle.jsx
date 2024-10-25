import styled from "styled-components";

const ButtonStyle = ({ type, children, onClick, width }) => {
  return (
    <Button type={type} onClick={onClick} width={width}>
      {children}
    </Button>
  );
};

export default ButtonStyle;

const Button = styled.button`
  width: ${({ width }) => width};
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  background-color: #2c5973;
  cursor: pointer;
`;
