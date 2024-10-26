import { Route, Routes } from "react-router-dom";
import CreatePage from "./page/CreatePage";
import DetailPage from "./page/DetailPage";
import HowCook from "./page/HowCook";
import IdeaPage from "./page/IdeaPage";
import LoginPage from "./page/loginPage";
import MainPage from "./page/MainPage";
import PopularRecipe from "./page/PopularRecipe";
import SignUp from "./page/SignUp";
import UserPage from "./page/UserPage";
import { RecipeProvider } from "./store/RecipeContext";

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularRecipe />} />
        <Route path="/howcook" element={<HowCook />} />
        <Route path="/idea" element={<IdeaPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/recipe/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </RecipeProvider>
  );
}

export default App;
