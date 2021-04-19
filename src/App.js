import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

function App() {
  // const [movieList, setMovieList] = useState([]);
  // const [, setAsc] = useState('');
  // const [, setDesc] = useState('');
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   Axios.get('./moviesList.json')
  //     .then(res => {
  //       setMovieList(res.data.components[1].items);
  //     })
  //   setIsLoading(false);
  // }, []);

  // const sortByPriceAsc = () => {
  //   const asc = movieList.sort((a, b) => (a.rank - b.rank));
  //   setAsc({ asc });
  // }

  // const sortByPriceDesc = () => {
  //   const desc = movieList.sort((a, b) => (b.rank - a.rank));
  //   setDesc({ desc });
  // }

  // const listOfMovies = movieList.map((movie, index) => {
  //   return <li className="list-group-item" key={index + 1}><Link to={`/movieList/${movie.id}`}>
  //     <img src={movie.imageUrl} alt={movie.imageUrl} height='200' width='200' /><br />
  //     <strong>{movie.title}</strong> </Link></li>
  // })

  return (
    <div>
      <BrowserRouter>
        <div className='container-fluid'>
          <Switch>
            <Redirect exact from="/" to="/movieList"  />
            <Route path="/movieList" component={MovieList} exact={true} />
            <Route path="/movieList/:id" component={MovieDetails} />
          </Switch>
        </div>
        {/* {isLoading ? (<div className="spinner-border" role="status">
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
        } */}
      </BrowserRouter>
    </div>
  )
}

export default App;
