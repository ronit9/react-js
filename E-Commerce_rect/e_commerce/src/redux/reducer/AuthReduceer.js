const initialstate = {
    user: null,
    Login: JSON.parse(localStorage.getItem("userlogin")) || [],
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
       
        case "USER_LOGOUT":
            localStorage.removeItem("userlogin")
            return {
                ...state,
                Login: []
            }
          
        case "ADD_TO_CART":
            let bcart = JSON.parse(localStorage.getItem("bannerproduct")) || [];
            let cart = JSON.parse(localStorage.getItem("cart")) || []
            const addcart = bcart.find((item) => item.id === action.payload)
            let allpro = [...cart, addcart]
            localStorage.setItem("cart", JSON.stringify(allpro))
            return {
                ...state,
                cart: allpro
            }

        default:
            return state
    }
}

export default AuthReduceer
