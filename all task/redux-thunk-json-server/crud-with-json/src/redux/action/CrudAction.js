const adduser = (val) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:4000/users", {
        method: "post",
        headers: { "contentType": "application/json" },
        body: JSON.stringify(val),
      })
      const data = await res.json();
      dispatch({ type: "ADD_USER", payload: data });

    } catch (e) {
      console.log(e);
      dispatch({ type: "ADD_USER_ERROR", payload: e });
    }
  }
};

const Viewuser = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:4000/users", {
        method: "get",
        headers: { "contentType": "application/json" },

      })
      const data = await res.json();


      dispatch({ type: "VIEW_USER", payload: data });

    } catch (e) {
      console.log(e);
      dispatch({ type: "ADD_USER_ERROR", payload: e });

    }
  }
}

const Deleteuser = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: "delete",
        headers: { "contentType": "application/json" },
      })
      const data = await res.json();
      dispatch({
        type: "DELETE_USER",
        payload: id
      })

    } catch (e) {
      console.log(e);
    }
  }
}
const edituser = (id) => {

  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: "get",
        headers: { "contentType": "application/json" },
      })
      const data = await res.json();
      dispatch({
        type: "EDIT_USER",
        payload: data
      })

    } catch (e) {
      console.log(e);
    }
  }
}
const updateuser = (record) => {
  return async (dispatch) => {
    try {

      const res = await fetch(`http://localhost:4000/users/${record.id}`, {
        method: "put",
        headers: { "contentType": "application/json" },
        body: JSON.stringify(record)
      })
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "UPDATE_USER",
        payload: data
      })

    } catch (e) {
      console.log(e);
    }
  }
}
export { adduser, Viewuser, Deleteuser, edituser, updateuser };
