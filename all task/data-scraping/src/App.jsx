import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Tailor from "./components/Tailor";
import About from "./components/about";
import Servic from "./components/Servic";

//icon
import { IoSearch } from "react-icons/io5";

import Works from "./components/Works";

function App() {
  const [mainheader, setMainheader] = useState([]);
  const [mainbanner, setMainbanner] = useState([]);
  const [tailor, setTailor] = useState([]);
  const [info, setInfo] = useState([]);
  const [services, setServices] = useState([]);
  const [cards, setCards] = useState([]);
  const [works, setWorks] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [clothes, setClothes] = useState([]);

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

  const getinfo = async () => {
    try {
      const res = await fetch("http://localhost:3000/about");
      const data = await res.json();

      setInfo(data);
    } catch (err) {
      console.log(err);
    }
  };
  const getservices = async () => {
    try {
      const res = await fetch("http://localhost:3000/services");
      const data = await res.json();
      // console.log(data);
      setServices(data);
      setCards(data[3].cards);
     
      
    } catch (err) {
      console.log(err);
    }
  };

  const getwork=async(index)=>{
    try{
      const res=await fetch("http://localhost:3000/works");
      const data=await res.json();
      // console.log(data);
      setWorks(data);
      setCatagory(data[3].catagories);
      setClothes(data[3].clothes);
      
      
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getheader();
    getbanner();
    gettailor();
    getinfo();
    getservices();
    getwork();
  }, []);
  return (
    <>
      <Header mainheader={mainheader} icon={<IoSearch />} />
      <Banner mainbanner={mainbanner} />
      <Tailor tailor={tailor} />
      <About info={info} />
      <Servic services={services} cards={cards}/>
      <Works works={works} catagory={catagory} clothes={clothes}/>
    </>
  );
}

export default App;
