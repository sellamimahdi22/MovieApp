import './App.css';
import MovieList from './conp/MovieList';
import Filter from './conp/Filter';
import { Movies } from './Data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Add } from './conp/Add';

function App() {
const [movies, setMovies] = useState(Movies)
const [text, setText] = useState('');
const [rating, setRating] = useState(1)
const handleChange=(e)=>setText(e.target.value);
const handleAdd=(newmovie)=>setMovies([...movies,newmovie]);
const handleRating=(x)=> setRating(x);

const Edit = (id,editedMovie) => setMovies(movies.map(el=>el.id===id?editedMovie:el))


return (
    <div className="App">

      <Filter rating={rating} text={text} handleChange={handleChange} handleRating={handleRating} />
      <br/>
      <br/>
      <br/>
    <MovieList edit={Edit} movies={movies.filter((el)=>el.Name.toLowerCase().includes(text) && el.Rating >= rating) }/><br/>
      <br/>
      <br/>
    <Add add={handleAdd}/>
     </div>
  );
}

export default App;
