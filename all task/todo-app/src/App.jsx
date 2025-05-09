import "./App.css";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [edit, setEdit] = useState();
  const [status, setStatus] = useState("");
  console.log(status);

  const submit = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.floor(Math.random() * 1000),
      task: task.trim(),
      status: "active",
    };
    if (task.trim() === "") return;

    if (todos.find((t) => t.task === task)) {
      alert("task already exist");
      return;
    }
    if (edit) {
      return setTodos(
        todos.map((todo) =>
          todo.id === edit.id ? { ...todo, task: task } : todo
        )
      );
    }
    setTodos([...todos, obj]);
    setTask("");
    setEdit("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const deletetask = (id) => {
    const del = todos.filter((todo) => todo.id !== id);
    setTodos(del);
    localStorage.setItem("todos", JSON.stringify(del));
  };
  const edittask = (id) => {
    setEdit(todos.find((todo) => todo.id === id));
    setTask(todos.find((todo) => todo.id === id).task);
  };
  const editstatus = (id) => {
    const edit = todos.map((t) =>
      t.id === id
        ? { ...t, status: t.status === "active" ? "completed" : "active" }
        : t
    );

    setTodos(edit);
    localStorage.setItem("todos", JSON.stringify(edit));
  };

  return (
    <>
      <Todo
        submit={submit}
        setTask={setTask}
        todos={todos}
        deletetask={deletetask}
        task={task}
        edittask={edittask}
        edit={edit}
        editstatus={editstatus}
        status={status}
      />
    </>
  );
}

export default App;
