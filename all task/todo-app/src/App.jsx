import "./App.css";
import Todo from "./todo";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [task, settask] = useState("");
  const [todos, settodos] = useState([]);

  const handleclick = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 100),
      task: task,
    };
    if (task == "") {
      alert("please enter task");
      return;
    }
    if (todos.some((t) => t.task == task)) {
      alert("task already exist");
      return;
    }
    settodos([...todos, data]);
    settask("");
  };
  return (
    <>
      <div className="container col-4">
        <div className="row">
          <form className=" text-center" onSubmit={handleclick}>
            <h1>todo</h1>
            <label className="fs-3">task</label>
            <input
              type="text"
              placeholder="enter task"
              value={task}
              onChange={(e) => settask(e.target.value)}
            />
            <button type="submit">submit</button>
          </form>
        </div>
        {todos.length == 0 ? <h1>no todos</h1> : ""}

        <Todo todos={todos} settask={settask} settodos={settodos} />
      </div>
    </>
  );
}

export default App;
