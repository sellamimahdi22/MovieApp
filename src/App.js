import './App.css';
import MovieList from './conp/MovieList';
import Filter from './conp/Filter';
import { Movies } from './Data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Add } from './conp/Add';
import { Route, Switch } from 'react-router-dom';
import Details from './conp/Details';
import { BrowserRouter } from 'react-router-dom';


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
      
<BrowserRouter >
      <Switch>

<Route exact path="/" render={()=>
<>

    <Filter rating={rating} text={text} handleChange={handleChange} handleRating={handleRating} />
    <MovieList  edit={Edit} movies={movies.filter((el)=>el.Name.toLowerCase().includes(text) && el.Rating >= rating) }/>
    <Add add={handleAdd}/>
</>
  }
  />
    
           
              <Route path="/Details/:id" exact  render={(props)=> <Details detail={Movies}{...props}/>}>
            </Route>

          
         
      <br/>
      <br/>
      </Switch>
    
    </BrowserRouter>
     </div>
  );
}

export default App;
