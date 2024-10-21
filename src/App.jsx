import { Route, Routes } from "react-router-dom";
import HowCook from "./page/HowCook";
import IdeaPage from "./page/IdeaPage";
import MainPage from "./page/MainPage";
import PopularRecipe from "./page/PopularRecipe";
import UserPage from "./page/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularRecipe />} />
        <Route path="/howcook" element={<HowCook />} />
        <Route path="/idea" element={<IdeaPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
