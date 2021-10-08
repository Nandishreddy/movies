import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

function App() {
  // Nandish
  return (
    <BrowserRouter> 
    <div className='container-fluid'>
      <Switch>
        <Redirect exact from="/" to="/movieList" />
        <Route path="/movieList" component={MovieList} exact={true} />
        <Route path="/movieList/:id" component={MovieDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
