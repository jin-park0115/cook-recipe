import NavBar from "../components/NavBar";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const PopularRecipe = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState([]);

  const callApi = () => {
    axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/10`
      )
      .then((res) => {
        const fetchedData = res.data.COOKRCP01.row;
        setData(fetchedData);
      })
      .catch((err) => console.log(err, "에러닷!"));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <h1>랭킹 탑 10</h1>
        <Carousel data={data} />
      </Container>
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
