import { useState } from "react";
const Counter = () => {
  let [sec, setsec] = useState(0);
  let [min, setmin] = useState(0);
  let [hour, sethour] = useState(0);
  let [wstart, setwstart] = useState(false);
  const start = () => {
    setsec((sec) => {
      if (sec == 60) {
        setsec(0);
        setmin((min) => {
          if (min == 60) {
            setmin(0);
            sethour((hour) => {
              if (hour == 12) {
                return 0;
              }
              return hour + 1;
            });
          }
          return min + 1;
        });
      }
      return sec + 1;
    });
    setTimeout(start, 1000);
  };

  const stop = () => {
    setwstart(false);
    clearTimeout(start);
  };
  return (
    <>
    <h1>stop watch</h1>
      <h1>
        {sec}:{min}:{hour}
      </h1>
      <button onClick={() => start()}>strat</button>
      <button onClick={() => stop()}>stop</button>
      <hr />
    </>
  );
};
export default Counter;
