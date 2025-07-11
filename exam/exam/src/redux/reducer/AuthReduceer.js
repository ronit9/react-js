

const initialstate = {
    users: JSON.parse(localStorage.getItem("user")) || [],
    Login: JSON.parse(localStorage.getItem("userlogin")) || [],
    allpr: []
}
const AuthReduceer = (state = initialstate, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            let us = JSON.parse(localStorage.getItem("user")) || []
            let alluser = [...us, action.payload]
            localStorage.setItem("user", JSON.stringify(alluser));
            return {
                ...state,
                users: alluser
            }

        case "LOGIN_USER":

            let log = JSON.parse(localStorage.getItem("userlogin")) || []
            let email = state.users.find((val) => val.email === action.payload.email)
            let pass = state.users.find((val) => val.password === action.payload.password)
            let alllog = [...log, action.payload]
            if (email && pass) {
                localStorage.setItem("userlogin", JSON.stringify(alllog));
            } else {
                alert("user not found")
            }
            return {
                ...state,
                Login: alllog
            }
        case "USER_LOGOUT":
            localStorage.removeItem("userlogin");
            alert("logout successfully")
            return {
                ...state,
                Login: []
            }
        case "MOVIE_DATA":
            return {
                ...state,
                allpr: action.payload
            }
        case "FIND_DATA":
            return {
                ...state,
                allpr: action.payload
            }
        default:
            return state
    }
}

export default AuthReduceer
