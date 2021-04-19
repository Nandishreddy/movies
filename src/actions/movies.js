import axios from 'axios';

export const getMovies = (movies) => {
    return {
        type: 'GET_MOVIES',
        payload: movies
    }
}

export const startGetMovies = () => {
    return (dispatch) => {
        axios.get('./moviesList.json')
        .then(response => {
            console.log(response.data.components[1].items, '---res from redux');
            if(response) {
                const movies = response.data.components[1].items;
                dispatch(getMovies(movies))
            }
               
            })
    }
}