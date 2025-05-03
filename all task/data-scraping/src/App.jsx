import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Tailor from "./components/Tailor";

//icon
import { IoSearch } from "react-icons/io5";

function App() {
  const [mainheader, setMainheader] = useState([]);
  const [mainbanner, setMainbanner] = useState([]);
  const [tailor, setTailor] = useState([]);

  const getheader = async () => {
    try {
      const res = await fetch("http://localhost:3000/mainheader");
      const data = await res.json();

      setMainheader(data);
    } catch (err) {
      console.log(err);
    }
  };
  const getbanner = async () => {
    try {
      const res = await fetch("http://localhost:3000/banner");
      const data = await res.json();
      setMainbanner(data);
    } catch (err) {
      console.log(err);
    }
  };

  const gettailor = async () => {
    try {
      const res = await fetch("http://localhost:3000/tailor");
      const data = await res.json();

      setTailor(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getheader();
    getbanner();
    gettailor();
  }, []);
  return (
    <>
      <Header mainheader={mainheader} icon={<IoSearch />} />
      <Banner mainbanner={mainbanner} />
      <Tailor tailor={tailor} />
    </>
  );
}

export default App;
