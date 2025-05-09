import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";
import "./app.css";

const App = () => {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [chapterInfo, setChapterInfo] = useState(null);
  const [verses, setVerses] = useState([]);

  const selectchapter = useCallback((s) => {
    setSelectedChapter(s);
  }, []);

  const getallchapter = async () => {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      );
      const result = await response.json();
      setChapterInfo(result);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  const getverses = async (s) => {
    try {
      const res = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${s}/verses/`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      );
      const result = await res.json();
      setVerses(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getallchapter();
    if (selectedChapter) {
      getverses(selectedChapter);
    }
  }, [selectedChapter]);
  return (
    <>
      <Header chapterInfo={chapterInfo} selectedChapter={selectchapter} />
      <Banner
        verses={verses}
        selectedChapter={selectedChapter}
        chapterInfo={chapterInfo}
      />
    </>
  );
};

export default App;
