const initialState = {
    verse: null,
    lang: null,
    randomverse: null,
    allverse: null,
    hindipoem: null,
    selected_chapter_verse: null,
    SELECT_ONE: []
}

const getgeeta = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VERSE":
            return {
                ...state,
                verse: action.payload
            }
        case "SELECT_LANG":
            return {
                ...state,
                lang: action.payload
            }
        case "GET_RANDOM_VERSE":
            const random = Math.floor(Math.random() * action.payload?.length);
            const singlVal = state.verse?.filter((item) => item.id === random);
            return {
                ...state,
                randomverse: singlVal
            }

        case "SELECT_CHAPTER_VERSE":
            return {
                ...state,
                selected_chapter_verse: action.payload
            }
        case "SELECT_ONE_CHAPTER":
        const sel=[action.payload]
            return {
                ...state,
                SELECT_ONE: sel
            }


        case "GET_all_VERSE":
            return {

                ...state,
                allverse: action.payload
            }


        default:
            return state
    }
}
export default getgeeta