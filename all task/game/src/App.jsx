import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdGames } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Images from "./Images";

function App() {
  const [allGame, setallGame] = useState([]);
  const gameName = useRef();
  const game = () => {
    const key = "82cd9ce9c413436283875b15b6cfde64";
    const url = `https://api.rawg.io/api/games?key=${key}&search=${gameName.current.value}&page=1&page_size=10`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setallGame(data.results);
      });
  };
  useEffect(() => {
    game();
  }, []);

  return (
    <>
      <style>
        {`
       
        .card{
        width: 100%;
        height: 400px;
        overflow: hidden;
        }
        .card img{
          width: 100%;
          height: 250px;
          object-fit: cover;
          object-position: center;
       
          
          }
          
        `}
      </style>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <h1 className="d-flex align-items-center gap-2">
              <MdGames />
              Games
            </h1>
          </div>

          <div className="col-4">
            <div className="search d-flex align-items-center gap-2">
              <input type="text" placeholder="search game" ref={gameName} />
              <FaSearch onClick={game} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {allGame.map((g, index) => {
            console.log(g);
            return (
              <div className="col-md-3 mb-3 " key={index}>
                <div className="card">
                  <div className="img">
                    <img src={g.background_image} alt="" />
                  </div>
                  <div className="card-info  p-2">
                    <div className="d-flex m-2 align-items-center">
                      <p className="m-0">select platform:-</p>
                      <select>
                        {g.parent_platforms.map((platform, index) => {
                          return (
                            <option key={index} value={platform.platform.name}>
                              {platform.platform.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <span>age:-{g.esrb_rating.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
