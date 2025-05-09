import React from "react";
import { useState } from "react";
const Todo = ({
  submit,
  setTask,
  task,
  todos,
  edit,
  deletetask,
  edittask,
  editstatus,
  setStatus,
  status,
}) => {
  return (
    <section className="todo">
      <div className="container">
        <div className="row align-items-center flex-column">
          <div className="col-6 bg-danger d-flex flex-column align-items-center">
            <h1>Add Task</h1>
            <form onClick={submit}>
              <label>task:-</label>
              <input
                type="text"
                placeholder="Enter your task"
                value={task || ""}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
              {edit ? (
                <button type="submit">Update</button>
              ) : (
                <button type="submit">Add</button>
              )}
            </form>
          </div>
          <div className="col-6  d-flex justify-content-center">
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Task</th>
                  <th>Action</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => {
                  return (
                    <tr key={todo.id}>
                      <td>{todo.id}</td>
                      <td>{todo.task}</td>
                      <td>
                        <button onClick={() => deletetask(todo.id)}>
                          delete
                        </button>
                        <button onClick={() => edittask(todo.id)}>edit</button>
                      </td>
                      <td onClick={(t) => editstatus(todo.id)}>
                        <span
                          style={
                            ({ cursor: "pointer" },
                            {color: todo.status === "active" ? "green" : "red"})
                          }
                        >
                          {todo.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
