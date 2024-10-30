import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../components/ButtonStyle";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const UserPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userID");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        const recipesRef = collection(db, "recipes");
        const q = query(recipesRef, where("user", "==", userId));
        const snapshot = await getDocs(q);
        const userRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(userRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    if (userId) {
      fetchUserRecipes();
    }
  }, [userId]);

  const handleLogOut = () => {
    alert("로그아웃 합니다.");
    navigate("/");
    localStorage.clear();
  };

  const handleDelete = async (recipeId) => {
    const confirmation = window.confirm("삭제하시겠습니까?");
    if (confirmation) {
      try {
        await deleteDoc(doc(db, "recipes", recipeId));
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.id !== recipeId)
        ); // 바로 상태 업ㄷㅔ이트를 위함.
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <Container>
      <Wrap>
        {userId === null ? (
          <LoginCon>
            <p>로그인 페이지로 가시겠습니까?</p>
            <div className="buttonWrap">
              <ButtonStyle onClick={() => navigate("/login")} width="200px">
                네
              </ButtonStyle>
              <ButtonStyle onClick={() => navigate("/")} width="200px">
                아니오
              </ButtonStyle>
            </div>
          </LoginCon>
        ) : (
          <>
            <BackArrow onClick={() => navigate(-1)} />
            <UserBox>
              <Title>{userId} 님 반갑습니다</Title>
              {recipes.length > 0 ? (
                <BoxWrap>
                  {recipes.map((recipe, index) => (
                    <RecipeBox key={index}>
                      <img src={recipe.imageUrl} alt={recipe.title} />
                      <h2>{recipe.title}</h2>
                      <DeleteBtn onClick={() => handleDelete(recipe.id)} />
                    </RecipeBox>
                  ))}
                </BoxWrap>
              ) : (
                <p>아직 등록된 레시피가 없습니다.</p>
              )}
              <ButtonStyle onClick={handleLogOut}>로그아웃</ButtonStyle>
            </UserBox>
          </>
        )}
      </Wrap>
    </Container>
  );
};

export default UserPage;

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  border: 1px solid #222;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #222;
`;

const Wrap = styled.div`
  width: 80%;
`;

const UserBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const BoxWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 80%;
  border: 1px solid black;
  padding: 20px;
`;

const RecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
  h2 {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  p {
    font-size: 0.9rem;
    color: #555;
  }
  :hover {
    opacity: 0.8;
  }
`;

const DeleteBtn = styled(MdDeleteForever)`
  display: none;
  position: absolute;
  right: 10px;
  color: #222;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  border: none;
  ${RecipeBox}:hover & {
    display: block;
  }
`;

const LoginCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .buttonWrap {
    display: flex;
    gap: 10px;
  }
`;

const BackArrow = styled(IoMdArrowRoundBack)`
  position: absolute;
  top: 0;
  cursor: pointer;
  font-size: 5rem;
  padding: 20px;
`;
