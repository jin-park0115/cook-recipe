import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const NavBar = ({ li, li2 }) => {
  return (
    <Nav>
      <Ul>
        <Li to="/">
          <li>HOME</li>
        </Li>
        <Li to={`/${li}`}>
          <li>{li}</li>
        </Li>
        <Li to={`/${li2}`}>
          <li>{li2}</li>
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
  padding: 20px 0px;
  border-bottom: 1px solid #222;
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
  color: #222;
  &:hover {
    color: #77cdff;
  }

  li {
    text-transform: uppercase;
  }
`;

const UserIcon = styled(CiUser)`
  font-size: 24px;
`;
