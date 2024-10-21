import { Route, Routes } from "react-router-dom";
import DetailPage from "./page/DetailPage";
import HowCook from "./page/HowCook";
import IdeaPage from "./page/IdeaPage";
import MainPage from "./page/MainPage";
import PopularRecipe from "./page/PopularRecipe";
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
      </Routes>
    </RecipeProvider>
  );
}

export default App;
