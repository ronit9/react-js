import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getdata } from "./redux/action/apiaction";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postdata.post.products
);
  console.log(data);

  useEffect(() => {
    dispatch(getdata());
  }, []);
  return (
    <>
      <h1>API THUNK</h1>
    </>
  );
}

export default App;
