import styled from "styled-components";

const TextArea = ({ id, height }) => {
  return <Text_area id={id} height={height}></Text_area>;
};

export default TextArea;

const Text_area = styled.textarea`
  height: ${({ height }) => height};
  border-radius: 5px;
  resize: none;
`;
