import React from 'react'
import { MovieCard } from './MovieCard'
const MovieList = ({ movies,edit }) => {
    return (
        <div className="box">
            {movies.map(el =>
                <MovieCard edit={edit} movie={el} />
            )}
        </div>
    )
}
export default MovieList
