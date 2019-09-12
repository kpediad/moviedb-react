import React from 'react';
import { Route, Switch } from 'react-router-dom'; // notice we are now importing Switch
import { connect } from 'react-redux';
import MovieTable from './MovieTable';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';
import MoviesEdit from './MoviesEdit';

const MoviesPage = ({ match, movies }) =>
  <div className="container-fluid" >
    <div className="row justify-content-center">
      <div className="col-6">
        <MovieTable movies={movies} />
      </div>
      <div className="col-6">
        <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
          <Route path={`${match.url}/new`} component={MoviesNew} />
          <Route path={`${match.url}/:movieId/edit`} component={MoviesEdit}/>
          <Route path={`${match.url}/:movieId`} component={MovieShow}/>
          <Route exact path={match.url} render={() => (
            <h3 style={{textAlign: 'center'}}>Select a movie from the list</h3>
          )}/>
        </Switch>
      </div>
    </div>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
