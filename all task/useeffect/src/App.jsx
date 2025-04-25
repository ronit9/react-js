import Alert from "./Alert";
import Api from "./Api";
import Api2 from "./Api2";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Api3 from "./api3";

function App() {
  let [user, setuser] = useState([]);

  const getuser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
      });
  };

  useEffect(() => {
    getuser();
  }, []);

  // api2

  let [products, setproducts] = useState([]);
  const getproducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data.products);
      });
  };
  useEffect(() => {
    getproducts();
  }, []);

  // api3
  let [rec, setrec] = useState([]);

  const getrec = () => {
    fetch("https://dummyjson.com/recipes/search?q=Margherita")
      .then((res) => res.json())
      .then((data) => {
        setrec(data.recipes);
      });
  };
  useEffect(() => {
    getrec();
  }, []);

  return (
    <>
      <Alert />
      <hr />
      <Api alluser={user} />

      <hr />
      <Api2 allproduct={products} />
      <hr />
      <Api3 allrec={rec} />
    </>
  );
}
export default App;
