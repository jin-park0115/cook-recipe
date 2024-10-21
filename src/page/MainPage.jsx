import styled from "styled-components";
import { MdOutlineSouthEast } from "react-icons/md";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <Container>
      <Box className="firstBox">
        <h1>
          Cook
          <br />
          Recipe
        </h1>
      </Box>
      <Box>
        <Link to="/popular">
          <p>많이찾는 레시피</p>
          <p>TOP10</p>
          <ArrowIcon />
        </Link>
      </Box>
      <Box>
        <Link to="/howcook">
          <p>조리방법</p>
          <p>분류</p>
          <ArrowIcon />
        </Link>
      </Box>
      <Box>
        <Link to="/idea">
          <p>IDEA</p>
          <ArrowIcon />
        </Link>
      </Box>
      <Box>
        <p>Coming-Soon..</p>
      </Box>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #232212;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  :nth-child(1) {
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
const Box = styled.div`
  background-color: #77cdff;
  border: 1px solid #060606;
  color: #fdfbfb;
  padding: 24px 0px 0px 24px;
  &.firstBox {
    font-size: 48px;
    pointer-events: none;
  }
`;

const ArrowIcon = styled(MdOutlineSouthEast)`
  font-size: 30px;
`;
