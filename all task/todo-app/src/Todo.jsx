import React from "react";

const todo = ({ todos, settodos, settask }) => {
  const deletetodo = (id) => {
    settodos(todos.filter((t) => t.id != id));
  };

  const edittodo = (id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, task: settask }; // Update the task here
      }
      return t; // Return the original todo if it's not the one being edited
    });
    settask(updatedTodos);
  };
  return (
    <section className="todo ">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="text-center">
            <th>id</th>
            <th>task</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => {
            const { task, id } = t;
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
                    onClick={() => edittodo(id)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default todo;
