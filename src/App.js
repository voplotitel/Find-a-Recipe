import React, { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponents from './MyRecipesComponent';

function App() {
  const MY_ID = "9d9e2fc4&";
  const MY_KEY = "1378eeb8324d2002d1aede0c6bc3f469";

  const [mySerch, setMySerch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salmon");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=%20${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySerch(e.target.value)
  }

  const finalSerch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySerch)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      finalSerch(e);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container form-container'>
        <input
          className='search'
          onChange={myRecipeSearch}
          value={mySerch}
          placeholder='Enter a recipe...'
          onKeyPress={handleKeyPress}
        />
        <button className='search-button' onClick={finalSerch}>
          <img
            className='search-image'
            src="https://img.icons8.com/fluency/48/000000/fry.png"
            alt="icon"
            onClick={finalSerch}
          />
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponents
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          healthLabels={element.recipe.healthLabels}
        />
      ))}
    </div>
  );
}

export default App;