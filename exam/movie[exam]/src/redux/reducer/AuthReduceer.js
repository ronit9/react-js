import { act } from "react";

const initialstate = {
    user: null,
    Login: JSON.parse(localStorage.getItem("userlogin")) || null,
    cart: JSON.parse(localStorage.getItem("cart")) || []
}
const AuthReduceer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload);
            return {
                ...state,
                user: action.payload
            }

        case "LOG_USER":
            localStorage.setItem("userlogin", JSON.stringify(action.payload))
            return {
                ...state,
                Login: action.payload
            }

        case "USER_LOGOUT":
            localStorage.removeItem("userlogin");
            return {
                ...state,
                Login: null,
            };

        case "ADD_TO_CART":
            let cpro = JSON.parse(localStorage.getItem("products")) || [];
            let cart = JSON.parse(localStorage.getItem("cart")) || []
            const addcart = cpro.find((item) => item.id === action.payload && item.id !== cart.id)
            let allpro = [...cart, addcart]
            localStorage.setItem("cart", JSON.stringify(allpro))
            return {
                ...state,
                cart: allpro
            }
        case "DELET_ITEM":
            const del = state.cart.filter((val) => val.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(del))
            return {
                ...state,
                cart: del
            }
    
        default:
            return state
    }
}

export default AuthReduceer
