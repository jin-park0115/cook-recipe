import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CreateButton = () => {
  return (
    <GoCreate to="/create">
      <Plus />
    </GoCreate>
  );
};

export default CreateButton;

const GoCreate = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  right: 5%;
  bottom: 30px;
  background-color: #0d92f4;
  cursor: pointer;
`;

const Plus = styled(FaPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;
