import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import MoviesPage from './containers/MoviesPage';
import MovieDBHome from './components/MovieDBHome';
import MovieDBAbout from './components/MovieDBAbout';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={MovieDBHome} />
          <Route path='/movies' component={MoviesPage}/>
          <Route path='/about' component={MovieDBAbout}/>
        </div>
      </Router>
    );
  }
}

export default App;
