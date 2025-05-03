import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";
import './app.css'


const App = () => {
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterInfo, setChapterInfo] = useState(null);
  const [verses, setVerses] = useState([]);
  const [onechapter, setOnechapter] = useState([]);

  const selectchapter = useCallback(
    (s) => {
      if (selectchapter.length > 0) {
        setSelectedChapter(s);
      }else{
        setSelectedChapter(1)
      }
      console.log(s);
    },
    [selectedChapter]
  );
 
  const getallchapter = async () => {
   const chapterNumber = selectedChapter||1
    // console.log(chapterNumber);

    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      
      setChapterInfo(result);
      
    } catch (error) {
      console.error(error);
    }
  };

  const getverses = async (s) => {
    
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${s}/verses/`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setVerses(result);
    } catch (error) {
      console.error(error);
    }
  };

 
  useEffect(() => {
    getallchapter(selectedChapter);
  }, [selectedChapter]);

  useEffect(() => {
    if (selectedChapter) {
      getverses(selectedChapter);
    }
  },[selectedChapter]);

  return (
    <>
      <Header chapterInfo={chapterInfo} selectchapter={selectchapter}  />
      <Banner verses={verses} selectedChapter={selectedChapter} chapterInfo={chapterInfo}/>
    </>
  );
};

export default App;
