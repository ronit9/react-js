const initialstate = {
    post: []
}
const reducerapi = (state = initialstate, action) => {
    switch (action.type) {
        case "GET_DATA":


            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}

export default reducerapi