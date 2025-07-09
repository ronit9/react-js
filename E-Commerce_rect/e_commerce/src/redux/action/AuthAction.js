const REGISTER_USER = (user) => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
                , body: JSON.stringify(user)
            })
            const res = await data.json()
            dispatch({
                type: "ADD_USER",
                payload: res
            })

        } catch (err) {
            console.log(err);

        }
    }
}

const LOGIN_USER = (loginuser) => {


    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/users?email=${loginuser.email}&password=${loginuser.password}`)
            const res = await data.json()
            localStorage.setItem("userlogin", JSON.stringify(res))
            if (res.length === 0) {
                alert("user not found")
            }
            dispatch({
                type: "LOG_USER",

            })
        } catch (err) {
            console.log(err);

        }
    }
}

const USER_LOGOUT = (username) => {

    return {
        type: "USER_LOGOUT",
        payload: username
    }
}

const ADD_TO_CART = (id) => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}
export { REGISTER_USER, LOGIN_USER, ADD_TO_CART, USER_LOGOUT }