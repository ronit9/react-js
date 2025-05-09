import "./App.css";
import Headers from "./Headers";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";

function App() {
  const [chapterInfo, setChapterInfo] = useState();
  const [verses, setVerses] = useState([]);
  const [selectChapter, setselectChapter] = useState();
  const [selectlanguage, setseleselectlanguage] = useState("english");


  const getallchapter = async () => {
    try {
      const res = await fetch(
        "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      );
      const data = await res.json();
      // console.log(data);
      setChapterInfo(data);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  const getverses = async (chapterId) => {
    console.log(chapterId);

    try {
      const res = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`,
        {
          method: "get", 
          headers: {
            "x-rapidapi-key":
              "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      );
      const data = await res.json();
      console.log(data); 
      setVerses(data);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  useEffect(() => {
    getallchapter();
  }, []);

  useEffect(() => {
    if (selectChapter && selectChapter.id) {
      getverses(selectChapter.id); // Call getverses when selectChapter is updated
    }
  }, [selectChapter]);

  const selectlang = (lang) => {
    setseleselectlanguage(lang);
  };
  const getselectChapter = (chapter) => {
    setselectChapter(chapter);
  };
  return (
    <>
      <Headers
        chapterInfo={chapterInfo}
        selectlanguage={selectlanguage}
        selectlang={selectlang}
        getselectChapter={setselectChapter}
      />
      <Banner selectlanguage={selectlanguage} chapterInfo={chapterInfo} verses={verses}/>
    </>
  );
}

export default App;
