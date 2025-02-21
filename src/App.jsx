import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./Componenets/Home";
import RecipesWebsite from "./Componenets/RecipesWebsite";

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
          <Route path="/" element={<Home />} />
          <Route path="/recipes-details/:id" element={<RecipesWebsite />} />
          </Routes>
      </provideStateContext.Provider>
    </>
  );
}

export default App;
