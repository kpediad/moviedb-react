import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; // notice we are now importing Switch
import { connect } from 'react-redux';
import MovieTable from './MovieTable';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';
import MoviesEdit from './MoviesEdit';
import { fetchMovies } from '../actions';

class MoviesPage extends Component {

  componentDidMount() {
    let result = this.props.fetchMovies();
    //console.log(result);
    if (result.error) {
      console.log(result.error);
      alert(result.error);
      return
    }
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row justify-content-center">
          <div className="col-6">
            <MovieTable movies={this.props.movies} />
          </div>
          <div className="col-6">
            <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
              <Route path={`${this.props.match.url}/new`} component={MoviesNew} />
              <Route path={`${this.props.match.url}/:movieId/edit`} component={MoviesEdit}/>
              <Route path={`${this.props.match.url}/:movieId`} component={MovieShow}/>
              <Route exact path={this.props.match.url} render={() => (
                <h3 style={{textAlign: 'center'}}>Select a movie from the list</h3>
              )}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps, { fetchMovies })(MoviesPage);
