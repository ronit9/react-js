import "./App.css";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [edit, setEdit] = useState(null);
  const [status, setStatus] = useState("pending");

  const submited = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      todo: todo,
      status: "",
    };
    const dup = todos.filter((t) => t.todo === todo);
    if (dup.length > 0) {
      alert("task already exist");
      setTodo("");
      return;
    }
    if (edit) {
      setTodos(todos.map((t) => (t.id === edit.id ? { ...t, todo: todo } : t)));
      setTodo("");
      setEdit(null);
      return;
    }

    setTodos([...todos, newTodo]);
    setTodo("");
  };
  const deleteitem = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const edititem = (task) => {
    setEdit(task);
    setTodo(task.todo);
  };

  const editstatus = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "completed" ? "pending" : "completed",
            }
          : t
      )
    );
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Todo
        submited={submited}
        setTodo={setTodo}
        todo={todo}
        todos={todos}
        deleteitem={deleteitem}
        edititem={edititem}
        status={status}
        editstatus={editstatus}
      />
    </>
  );
}

export default App;
