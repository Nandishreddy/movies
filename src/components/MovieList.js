import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetMovies } from '../actions/movies';


const MovieList = (props) => {
    // const [movieList, setMovieList] = useState([]);
    const [, setAsc] = useState('');
    const [, setDesc] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Axios.get('./moviesList.json')
        //     .then(res => {
        //         setMovieList(res.data.components[1].items);
        //     })
        props.dispatch(startGetMovies())
        // setMovieList(props.movies[0]);
        setIsLoading(false);
    }, []);
    console.log(props, '----props');
    const sortByPriceAsc = () => {
        const asc = props.movies.sort((a, b) => (a.rank - b.rank));
        setAsc({ asc });
    }

    const sortByPriceDesc = () => {
        const desc = props.movies.sort((a, b) => (b.rank - a.rank));
        setDesc({ desc });
    }

    const listOfMovies = props.movies.map((movie, index) => {
        return <li className="list-group-item" key={index + 1}><Link to={`/movieList/${movie.id}`}>
            <img src={movie.imageUrl} alt={movie.imageUrl} height='200' width='200' /><br />
            <strong>{movie.title}</strong> </Link></li>
    })


    return (
        <div>
            {isLoading ? (<div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>) : <div>
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
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList);