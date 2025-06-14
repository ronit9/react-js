const inputstate = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [],
    single: null
}

const user_input = (state = inputstate, action) => {


    switch (action.type) {
        case "ADD_USER":
            const alluser = [...state.user, action.payload]
            localStorage.setItem("user", JSON.stringify(alluser))
            return {
                ...state,
                user: alluser
            }

        case "DELETE_USER":
            const deletdata = state.user.filter((val, i) => val.id != action.payload)
            localStorage.setItem("user", JSON.stringify(deletdata))
            return {
                ...state,
                user: deletdata
            }

        case "EDIT_USER":
            console.log(action.payload);
            const single = state.user.find((val, i) => val.id == action.payload)
            return {
                ...state,
                single: single
            }

        default:
            return state
    }
}

export default user_input