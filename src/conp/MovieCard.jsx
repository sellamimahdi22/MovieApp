
import React from 'react'
import { Card } from 'react-bootstrap'
import Edit from './Edit'
import StarRating from './StarRating'

export const MovieCard = ({ movie,edit }) => {
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.Name}</Card.Title>
          <Card.Text>{movie.Date} </Card.Text>
          <StarRating rat={movie.Rating} />
         <Edit edit={edit} movie={movie} />
        </Card.Body>
      </Card>
    </div>
  )
}
export default MovieCard