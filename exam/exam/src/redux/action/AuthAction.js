const REGISTER_USER = (data) => {


    return {
        type: "REGISTER_USER",
        payload: data
    }
}

const LOGIN_USER = (data) => {
    return {
        type: "LOGIN_USER",
        payload: data
    }

}
const USER_LOGOUT = (name) => {

    return {
        type: "USER_LOGOUT",
        payload: name
    }
}
const MOVIE_DATA = () => {
    return async (dispach) => {
        try {
            const data = await fetch(`https://dummyjson.com/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const res = await data.json();

            dispach({
                type: "MOVIE_DATA", payload: res.products
            })
        } catch (err) {
            console.log(err);
        }
    }
}
const FIND_DATA = (name) => {
    return async (dispach) => {
        try {
            const data = await fetch(`https://dummyjson.com/products/search?q=${name}
`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const res = await data.json();
            console.log(res.products);

            dispach({
                type: "FIND_DATA", payload: res.products
            })
        } catch (err) {
            console.log(err);
        }
    }
}
export { REGISTER_USER, LOGIN_USER, MOVIE_DATA, FIND_DATA, USER_LOGOUT };   