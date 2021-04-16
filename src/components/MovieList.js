import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

// import Movie from './Movie';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [asc, setAsc] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        Axios.get('./moviesList.json')
            .then(res => {
                setMovieList(res.data.components[1].items);
            })
    }, []);

    const sortByPriceAsc = () => {
        setAsc(prevState => {
            movieList.sort((a, b) => (a.rank - b.rank))
        });
    }

    const sortByPriceDesc = () => {
        setDesc(prevState => {
            movieList.sort((a, b) => (b.rank - a.rank))
        });
    }

    const listOfMovies = movieList.map((movie, index) => {
        return <li className="list-group-item" key={index + 1}><Link to={`/movieList/${movie.id}`}>
            <img src={movie.imageUrl} alt={movie.imageUrl} height='200' width='200' /><br />
            <strong>{movie.title}</strong> </Link></li>
    })

    return (
        <div>
            <h1>MovieListing</h1>
            <strong>Sort: </strong>
            <button type="button" className="btn btn-primary btn-sm" onClick={sortByPriceAsc}>
                Ascending
            </button>
            <button type="button" className="btn btn-danger btn-sm" onClick={sortByPriceDesc}>
                Descending
            </button>
        <div>
            <ol className="list-group list-group-flush">{listOfMovies}</ol>
        </div>
        </div>
    )

}

export default MovieList;