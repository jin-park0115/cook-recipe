import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import { useRecipe } from "../store/RecipeContext";
const HowCook = () => {
  const { data, loading } = useRecipe();

  return (
    <>
      <NavBar li={"popular"} li2={"idea"} />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {data.map((res) => (
            <Card key={res.RCP_SEQ}>
              <Title>{res.RCP_NM}</Title>
              <Link to={`/recipe/${res.RCP_SEQ}`}>
                <Img src={res.ATT_FILE_NO_MK} alt={res.RCP_NM} />
              </Link>
              <div className="howDetail">
                <p>#{res.RCP_WAY2}</p>
                <p>#{res.RCP_PAT2}</p>
                {res.HASH_TAG ? <p>#{res.HASH_TAG}</p> : null}
              </div>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default HowCook;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const Card = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  border-bottom: 1px solid #454444;
  padding-top: 20px;
  .howDetail {
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 10px 0px 10px 0px;
  }
`;

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;
