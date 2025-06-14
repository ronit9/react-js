const add_user = (data) => {
    return {
        type: "ADD_USER",
        payload: data
    }
}

const delete_user = (id) => {
    return {
        type: "DELETE_USER",
        payload: id
    }
}

const edit_user = (id) => {

    return {
        type: "EDIT_USER",
        payload:id
    }
}
export { add_user, delete_user,edit_user };