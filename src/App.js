import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
  //variables
  const APP_ID = "6db2d6c2";
  const APP_KEY = "5fa585ec7f0225d8f1a5d8097404307f";
  //useStates
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(Math.floor(Math.random()*100));

 

  //useEffects
  useEffect(() => {
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getRecipes = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
      setSearch("");
    };
    getRecipes();
  }, [query]);

  //methods


  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="container">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="container-fluid">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div></div>
    </div>
  );
};
export default App;
