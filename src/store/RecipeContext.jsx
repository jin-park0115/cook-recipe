import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const RecipeContext = createContext();

export const useRecipe = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/10`
        );
        const datas = response.data.COOKRCP01.row;
        setData(datas);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <RecipeContext.Provider value={{ data, loading, err }}>
      {children}
    </RecipeContext.Provider>
  );
};
