const movieInitialState = []
const movieReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES' : {
            return [...action.payload]
        }
        case 'VIEW_MOVIE' : {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default movieReducer;