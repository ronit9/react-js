import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Home from "./components/Header";
import Banner from "./components/Banner";
import Add from "./components/Add";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Show from "./components/Show";
function App() {
  const [recipes, setRecipes] = useState({ taste: [] });
  const [vegetarian, setVegetarian] = useState(
    localStorage.getItem("vegetarian")
      ? JSON.parse(localStorage.getItem("vegetarian"))
      : []
  );
  const [nonveg, setNonveg] = useState(
    localStorage.getItem("nonveg")
      ? JSON.parse(localStorage.getItem("nonveg"))
      : []
  );

  const [allrecipes, setAllRecipes] = useState(
    localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes"))
      : []
  );
  const [desert, setDesert] = useState(
    localStorage.getItem("dessert")
      ? JSON.parse(localStorage.getItem("dessert"))
      : []
  );
  const [formerrors, setFormErrors] = useState({
    recipeName: "",
    info: "",
    ingredients: "",
    price: "",
    image: "",
    category: "",
    taste: [],
  });
  const formInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setRecipes({ ...recipes, taste: [...recipes.taste, value] });
      } else {
        setRecipes({
          ...recipes,
          taste: recipes.taste.filter((item) => {
            return item !== value;
          }),
        });
      }
    } else {
      setRecipes({ ...recipes, [name]: value });
    }
  };

  const foremerr = () => {
    let chek = true;
    const err = {
      recipeName: "",
      info: "",
      ingredients: "",
      price: "",
      image: "",
      critaria: "",
      category: "",
      taste: [],
    };

    if (!recipes.recipeName) {
      err.recipeName = "Name Is Required";
      chek = false;
    } else if (recipes.recipeName === allrecipes.recipeName) {
      err.recipeName = "Name Already Exist";
      chek = false;
    }
    if (!recipes.info) {
      err.info = "Name Is Required";
      chek = false;
    }
    if (!recipes.ingredients) {
      err.ingredients = "Ingredients Is Required";
      chek = false;
    }
    if (!recipes.price) {
      err.price = "Price Is Required";
      chek = false;
    }
    if (!recipes.image) {
      err.image = "Image Is Required";
      chek = false;
    }
    if (!recipes.critaria) {
      err.critaria = "Critaria Is Required";
      chek = false;
    }
    if (!recipes.category) {
      err.category = "Category Is Required";
      chek = false;
    }
    if (!recipes.taste) {
      err.taste = "Taste Is Required";
      chek = false;
    }
    setFormErrors(err);
    return chek;
  };
  const formSubmit = (e) => {
    e.preventDefault();

    if (foremerr()) {
      let addRecipe = {
        id: Math.floor(Math.random() * 1000),
        ...recipes,
      };
      let rec = [...allrecipes, addRecipe];
      setAllRecipes(rec);
      localStorage.setItem("recipes", JSON.stringify(rec));

      let veg = rec.filter((item) => item.critaria === "vegetarian");
      let nonveg = rec.filter((item) => item.critaria === "non-vegetarian");
      let des = rec.filter((item) => item.critaria === "desert");
      if (veg.length > 0) {
        setVegetarian(veg);
        localStorage.setItem("vegetarian", JSON.stringify(veg));
      }

      if (nonveg.length > 0) {
        setNonveg(nonveg);
        localStorage.setItem("nonveg", JSON.stringify(nonveg));
      }

      if (des.length > 0) {
        setDesert(des);
        localStorage.setItem("dessert", JSON.stringify(des));
      }

      setRecipes({
        recipeName: "",
        info: "",
        ingredients: "",
        price: "",
        image: "",
        category: "",
        taste: [],
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/add"
            element={
              <Add
                formSubmit={formSubmit}
                formInput={formInput}
                allrecipes={allrecipes}
                setRecipes={setRecipes}
                formerrors={formerrors}
                recipes={recipes}
              />
            }
          />
          <Route
            path="/show"
            element={
              <Show
                allrecipes={allrecipes}
                nonveg={nonveg}
                vegetarian={vegetarian}
                desert={desert}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
