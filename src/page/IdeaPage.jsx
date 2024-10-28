import styled from "styled-components";
import NavBar from "../components/NavBar";
import CreateButton from "../components/CreateButton";
import { useRecipe } from "../store/RecipeContext";
import { ImFilePicture } from "react-icons/im";

const IdeaPage = () => {
  const { fireData } = useRecipe();

  return (
    <>
      <NavBar li={"popular"} />
      <Banner>
        <h1>자신의 맛을 보여주세요!</h1>
      </Banner>
      <Container>
        <CardWrap>
          {fireData.map((recipe) => (
            <Card>
              <ImgBox>
                {recipe.imageUrl ? (
                  <img src={recipe.imageUrl} alt={recipe.title} />
                ) : (
                  <NoImg />
                )}
              </ImgBox>
              <TitleBox>
                <h2>요리이름:{recipe.title}</h2>
                <p className="ingredients">요리재료:{recipe.ingredients}</p>
                <p className="recipe">레시피 :{recipe.recipe}</p>
              </TitleBox>
            </Card>
          ))}
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
  .ingredients {
    font-size: 0.9rem;
    font-weight: 300;
  }
  .recipe {
    font-size: 0.8rem;
  }
`;
