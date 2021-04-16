import React, { useState, useEffect } from 'react'
import axios from 'axios';


const MovieDetails = (props) => {
    const [movie, setMovie] = useState('');
    
    useEffect(() => {
        axios.get(`/moviesList.json`)
            .then(response => {
                const movieItems = response.data.components[1].items
                setMovie(movieItems.find(mov => {
                    var id = props.match.params.id;
                    return mov.id == id;
                }))
            })
    }, [props.match.params.id])
    
    return (
        <div className="card">
            <h1 className="text-center">Movie Details Page</h1>
            <img src={movie.imageUrl} className="rounded mx-auto d-block" alt={movie.imageUrl} height="350" width='300' />
            <div className="list-group list-group-flush">
            <p><strong>Rank of the Movie:</strong> {movie.rank}</p>
            <p><strong>Title:</strong> {movie.title}</p>
            <p><strong>Movie Released On:</strong> {movie.releaseDate}</p>
            <p><strong>Synopsis:</strong> {movie.synopsis}</p>
            </div>
        </div>
    )
}

export default MovieDetails;