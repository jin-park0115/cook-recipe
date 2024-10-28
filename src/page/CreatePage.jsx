import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../components/ButtonStyle";
import TextArea from "../components/TextArea";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const CreatePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (!image) return "";
    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(imageRef);
      setImageUrl(downloadURL);
      return downloadURL;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImageUrl = await handleImageUpload();
    try {
      await addDoc(collection(db, "recipes"), {
        title,
        ingredients,
        recipe,
        imageUrl: uploadedImageUrl || "",
        createAt: new Date(),
      });
      navigate("/idea");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Box>
          <ImgBox>
            <input type="file" onChange={handleImageChange} />
            {imageUrl && <img src={imageUrl} alt="업로드한 이미지" />}
          </ImgBox>
          <label htmlFor="title">요리이름</label>
          <TextArea
            id={"title"}
            height={"50px"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="ingredients">재료</label>
          <TextArea
            id={"ingredients"}
            height={"100px"}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <label htmlFor="recipe">레시피</label>
          <TextArea
            id={"recipe"}
            height={"400px"}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </Box>
        <div className="btnWrap">
          <ButtonStyle type={"submit"} width={"200px"}>
            등록
          </ButtonStyle>
          <ButtonStyle
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            width={"200px"}
          >
            취소
          </ButtonStyle>
        </div>
      </form>
    </Container>
  );
};

export default CreatePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  .btnWrap {
    display: flex;
    gap: 10px;
  }
`;

const Box = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 3px 5px 0px #111;
  background-color: #b7d1e4;
`;

const ImgBox = styled.div`
  height: 300px;
  border: 1px solid #222;
  border-radius: 5px;
`;
