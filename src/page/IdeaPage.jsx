import styled from "styled-components";
import NavBar from "../components/NavBar";
import CreateButton from "../components/CreateButton";
import { useRecipe } from "../store/RecipeContext";
import { ImFilePicture } from "react-icons/im";
import banner from "../assets/배너.jpeg";
import Loading from "../components/Loading";
const IdeaPage = () => {
  const { fireData, loading } = useRecipe();

  const sortedData = [...fireData].sort((a, b) => {
    return b.createAt.seconds - a.createAt.seconds;
  }); // 게시물 정렬

  const active = localStorage.getItem("userID");

  return (
    <>
      <NavBar li={"popular"} li2={"howcook"} />
      <Banner>
        <img src={banner} alt="" />
      </Banner>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <CardWrap>
            {sortedData.map((recipe) => (
              <Card key={recipe.id}>
                <ImgBox>
                  {recipe.imageUrl ? (
                    <img src={recipe.imageUrl} alt={recipe.title} />
                  ) : (
                    <NoImg />
                  )}
                </ImgBox>
                <TitleBox>
                  <h2>{recipe.title}</h2>
                  <p>{recipe.user}님의 레시피</p>
                  <p className="ingredients">
                    요리재료: <br />
                    {recipe.ingredients}
                  </p>
                  <p className="recipe">
                    레시피: <br />
                    {recipe.recipe}
                  </p>
                </TitleBox>
              </Card>
            ))}
          </CardWrap>
          {active ? <CreateButton /> : ""}
        </Container>
      )}
    </>
  );
};

export default IdeaPage;

const Banner = styled.div`
  width: 100vw;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;
const Card = styled.div`
  width: calc(33.333% - 7px);
  height: 500px;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 2.9px 5.8px 5.8px hsl(0deg 0% 0% / 0.41);
`;

const ImgBox = styled.div`
  width: 100%;
  height: 200px;
  border-bottom: 0.5px solid #757474;
  img {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    object-fit: cover;
  }
`;

const NoImg = styled(ImFilePicture)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`;

const TitleBox = styled.div`
  padding: 10px;
  overflow: scroll;
  .ingredients {
    font-size: 0.9rem;
    font-weight: 300;
  }
  .recipe {
    font-size: 0.8rem;
    white-space: pre-line;
  }
`;
