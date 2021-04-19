import React, { useState, useEffect } from 'react'
import axios from 'axios';



const MovieDetails = (props) => {
    const [movie, setMovie] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/moviesList.json')
            .then(response => {
                const movieItems = response.data.components[1].items
                setMovie(movieItems.find(mov => {
                    var id = props.match.params.id;
                    return mov.id == id;
                }))
                setIsLoading(false);
            })
    }, [props.match.params.id])

    return (
        <div className="card">
            {isLoading ? (<div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>) : <div>
                <h1 className="text-center">Movie Details Page</h1>
                <img src={movie.imageUrl} className="rounded mx-auto d-block" alt={movie.imageUrl} height="350" width='300' />
                <div className="list-group list-group-flush">
                    <p><strong>Rank of the Movie:</strong> {movie.rank}</p>
                    <p><strong>Title:</strong> {movie.title}</p>
                    <p><strong>Movie Released On:</strong> {movie.releaseDate}</p>
                    <p><strong>Synopsis:</strong> {movie.synopsis}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default MovieDetails;