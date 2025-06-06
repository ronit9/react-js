import { use } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "./redux/action/c-action";
function App() {
  const no = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>counter App</h1>
      no:={no}
      <button onClick={() => dispatch(increment())}>++</button>
    </>
  );
}

export default App;
