import React from "react";
import { useState } from "react";
const Todo = ({ todos, settodos, taskid }) => {
  const [status, setstatus] = useState("active");
  const deletetodo = (id) => {
    settodos(todos.filter((t) => t.id != id));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const edittodo = (id, task) => {
    settask(task);
    taskid(id);
  };
  const selectstatus = (id) => {
    settodos(
      todos.map((s) =>
        s.id == id
          ? { ...s, status: s.status == "active" ? "deactive" : "active" }
          : s
      )
    );
  };

  return (
    <section className="todo ">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="text-center">
            <th>id</th>
            <th>task</th>
            <th>action</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => {
            const { task, id, status } = t;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{task}</td>
                <td className="d-flex gap-5 justify-content-center">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deletetodo(id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => edittodo(id, task)}
                  >
                    edit
                  </button>
                </td>
                <td onClick={() => selectstatus(id)}>
                  <span style={status==="active"?{color:"green"}:{color:"red"}}>{status}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Todo;
