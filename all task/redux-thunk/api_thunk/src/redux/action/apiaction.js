const getdata = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("https://dummyjson.com/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const res = await data.json()
          
            dispatch({
                type: "GET_DATA",
                payload: res
            })

        } catch (e) {
            console.log(e)
        }
    }
}
export { getdata }