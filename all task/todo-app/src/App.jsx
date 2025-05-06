import "./App.css";
import Todo from "./Todo";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [task, settask] = useState("");
  const [todos, settodos] = useState([]);
  const [taskid, settaskid] = useState("");

  // console.log(taskid);
  const handleclick = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 100),
      task: task,
      status: "active",
    };
    if (task == "") {
      alert("please enter task");
      return;
    }
    if (todos.some((t) => t.task == task)) {
      alert("task already exist");
      return;
    }
    if (taskid) {
      settodos(
        todos.map((t) => {
          if (t.id == taskid) {
            t.task = task;
          }
          return t;
        })
      );
      settaskid("");
      settask("");
    } else {
      settodos([...todos, data]);
      settask("");
    }
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
            {taskid ? (
              <button type="submit">update</button>
            ) : (
              <button className="btn btn-primary" type="submit">
                submit
              </button>
            )}
          </form>
        </div>
        {todos.length == 0 ? <h1>no todos</h1> : ""}

        <Todo
          todos={todos}
          settask={settask}
          settodos={settodos}
          taskid={settaskid}
          // setstatus={setstatus}
        />
      </div>
    </>
  );
}

export default App;
