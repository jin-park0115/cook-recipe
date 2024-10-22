import NavBar from "../components/NavBar";
import styled from "styled-components";
import Carousel from "../components/Carousel";

import { useRecipe } from "../store/RecipeContext";
import Loading from "../components/Loading";

const PopularRecipe = () => {
  const { data, loading } = useRecipe();
  return (
    <>
      <NavBar li={"howcook"} />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h1>랭킹 탑 10</h1>
          <Carousel data={data} />
        </Container>
      )}
    </>
  );
};

export default PopularRecipe;

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  background-color: #77cdff;
  h1 {
    color: #c62e2e;
  }
`;
