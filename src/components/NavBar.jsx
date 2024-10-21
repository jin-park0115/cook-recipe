import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <Li to="/">
          <li>HOME</li>
        </Li>
        <Li to="/howcook">
          <li>HOWCOOK</li>
        </Li>
        <Li to="/idea">
          <li>IDEA</li>
        </Li>
        <Li to="/user">
          <li>
            <UserIcon />
          </li>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  width: 100%;
  background-color: #0d92f4;
  padding: 20px 0px;
`;

const Ul = styled.ul`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;

const Li = styled(Link)`
  transition: ease-in-out 0.5s;
  &:hover {
    color: black;
  }
`;

const UserIcon = styled(CiUser)`
  font-size: 24px;
`;
