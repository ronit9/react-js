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
            console.log(res);

            if (res.length === 0) {
                alert("user not found")
            }
            dispatch({
                type: "LOG_USER",
                payload: res
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
const DELET_ITEM = (id) => {
    return {
        type: "DELET_ITEM",
        payload: id
    }
}
const QTY_MANAGE=(id,type)=>{ 
    return{
        type:"QTY_MANAGE",
        payload:{id,type}
    }
}
export { REGISTER_USER, LOGIN_USER, ADD_TO_CART, USER_LOGOUT, DELET_ITEM, QTY_MANAGE };