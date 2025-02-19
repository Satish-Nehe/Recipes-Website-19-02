import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home";
import AllRecipes from "./Componenets/AllRecipes";

export const provideStateContext = createContext();

function App() {
  const [recipes, setRecipes] = useState([]);
  async function handleApiCall() {
    try {
      const request = await fetch("https://dummyjson.com/recipes");
      const response = await request.json();
      setRecipes(response.recipes);
    } catch (e) {
      console.log(e); 
    }
  }

  useEffect(() => {
    handleApiCall();
  }, [recipes]);
  return (
    <>
      <provideStateContext.Provider value={recipes}>
        <Routes>
          <Route path="all-recipes" element={<AllRecipes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </provideStateContext.Provider>
    </>
  );
}

export default App;
