import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Secontapi from "./pages/Secontapi";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [searchdata, setsearchdata] = useState([]);
  
  

  const getpro = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/products");
      setdata(data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getname = (e) => {
    setsearch(e.target.value);
  };

  const serachpro = async (search) => {
    try {
      const data = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setsearchdata(data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    serachpro(search);
  }, [search]);

  useEffect(() => {
    getpro();
  }, []);
  return (
    <>
      <Secontapi data={data} getname={getname} searchdata={searchdata}/>
    </>
  );
}

export default App;
