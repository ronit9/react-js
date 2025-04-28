import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './App.css'
function App() {
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);
  const [save, setsave] = useState(false);

  const start = () => {
    if (save) return;
    const timer = setInterval(() => {
      setsec((sec) => {
        if (sec === 60) {
          setmin((min) => {
            if (min === 60) {
              sethour((hour) => {
                if (hour === 12) {
                  return 0;
                } else {
                  return hour + 1;
                }
              });
              return 0;
            } else {
              return min + 1;
            }
          });
          return 0;
        } else {
          return sec + 1;
        }
      });
    }, 1000);
    setsave(timer);
  };
  const stop = () => {
    if (setsave) {
      clearInterval(setsave);
      setsave(null);
    }
  };

  useEffect(()=>{
    return()=>{
      if (save) {
        clearInterval(save)
      }
    }
  },[save])

  return (
    <>
      <div className="container">
        <div className="row flex-column text-center">
          <div className="col-12">
            <h1>Counter App</h1>
          </div>
          <div className="col-12">
            <span>
              {sec}:{min}:{hour}
            </span>
            <div>
            <button onClick={() => start()} className="btn btn-primary">
              start
            </button>
            <button onClick={() => stop(true)} className="btn btn-primary">
              stop
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
