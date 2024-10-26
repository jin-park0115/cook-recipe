import styled from "styled-components";
import NavBar from "../components/NavBar";
import CreateButton from "../components/CreateButton";

const IdeaPage = () => {
  return (
    <>
      <NavBar li={"popular"} />
      <Banner>
        <h1>자신의 맛을 보여주세요!</h1>
      </Banner>
      <Container>
        <CardWrap>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
        </CardWrap>
        <CreateButton />
      </Container>
    </>
  );
};

export default IdeaPage;

const Banner = styled.div`
  width: 100vw;
  background-color: #4d473f;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: aqua;
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;
const Card = styled.div`
  width: calc(33.333% - 7px);
  height: 100%;
  background-color: blue;
`;
