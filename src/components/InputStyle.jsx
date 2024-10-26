import styled from "styled-components";

const InputStyle = ({
  type,
  id,
  value,
  placeholder,
  onChange,
  min,
  width,
  height,
}) => {
  return (
    <Input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={min}
    />
  );
};

export default InputStyle;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  height: 20px;
  width: 400px;
  font-size: 1.1rem;
  transition: border-color 0.3s;
  &:focus {
    border: 2px solid #4a9fd0;
  }
`;
