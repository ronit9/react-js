import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calledapi from "./pages/Calledapi";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [searched, setSearched] = useState([]);
  const [search, setSearch] = useState("");
  const getrec = (e) => setSearch(e.target.value);

  const allrec = async () => {
    try {
      const dara = await fetch("https://dummyjson.com/recipes");
      const res = await dara.json();
      setRecipes(res.recipes);
    } catch (e) {
      console.log(e);
    }
  };
  const searchrec = async (search) => {
    try {
      const dara = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      const res = await dara.json();
      setSearched(res.recipes);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    allrec();
  }, []);
  useEffect(() => {
    searchrec(search);
  }, [search]);
  return (
    <>
      <Calledapi recipes={recipes} getrec={getrec} searched={searched} />
    </>
  );
}

export default App;
