import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import { connect } from 'react-redux';
import { sortMovie } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

class MovieTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort_column: 'title',
      sort_direction: 'asc'
    };
  }

  toggle = direction => {
    if (direction === 'asc') {
      return 'desc';
    }
    else {
      return 'asc';
    }
  }

  handleHeaderClick = column => {
    sortMovie(this.state);
    this.setState({
      sort_column: column,
      sort_direction: toggle(this.state.sort_direction)
    });
  }

  render(){
    return (
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table table-bordered bg-light" style={{textAlign: 'center'}}>
              <thead>
                <tr className="table-primary">
                  <th colspan="3" scope="col">Movies List</th>
                </tr>
                <tr className="table-primary">
                  <th scope="col">Title</th>
                  <th scope="col">Release Year</th>
                  <th scope="col">Movie Score</th>
                </tr>
              </thead>
              <MoviesList movies={this.props.movies} />
            </table>
          </div>
        </div>
      </div>    
    );
  };
}

export default connect(null, {sortMovie})(MovieTable);
