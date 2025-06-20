const actiongeeta = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18", {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
                    "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
                },
            })
            const data = await res.json()
            dispatch({ type: "GET_VERSE", payload: data })


        } catch (err) {
            console.log(err)
        }
    }
}

const getverse = (chapterno) => {
    const no = chapterno?.map((item) => item.id)

    

    return async (dispatch) => {



        try {
            const res = await fetch(
                `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${no}/verses/`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key":
                            "1c60130296msh928f7c24507d6fap1a1510jsn770055bcc7a4",
                        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",

                    },
                }
            );
            const data = await res.json()
            // console.log(data);
            dispatch({ type: "GET_all_VERSE", payload: data })

        } catch (err) {
            console.log(err)
        }
    }
}

const selectlang = (lang) => {

    return {
        type: "SELECT_LANG",
        payload: lang
    }
}

const getrandomverse = (data) => {
    return {
        type: "GET_RANDOM_VERSE",
        payload: data
    }
}


export { actiongeeta, selectlang, getrandomverse, getverse }