const Todo = ({
  submited,
  setTodo,
  todo,
  todos,
  deleteitem,
  edititem,
  status,
  editstatus,
}) => {
  return (
  
   <>
   <style>
   
   </style>
    <section className="todo d-flex flex-column align-items-center my-5">
      <form onSubmit={submited}>
        <label>task:-</label>
        <input
          type="text"
          placeholder="enter task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>submit</button>
      </form>
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>task</th>
              <th>action</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteitem(todo.id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => edititem(todo)}
                  >
                    edit
                  </button>
                </td>
                <td onClick={() => editstatus(todo.id)}>
                  <span
                    style={
                      ({ cursor: "pointer" },
                      { color: todo.status === "completed" ? "green" : "red" })
                    }
                  >
                    {todo.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
   </>
  );
};

export default Todo;
