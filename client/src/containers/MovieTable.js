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
    let new_sort_direction = 'asc';
    if (column === this.state.sort_column) {
      new_sort_direction = toggle(this.state.sort_direction);
    }
    sortMovie(column, new_sort_direction);
    this.setState({
      sort_column: column,
      sort_direction: new_sort_direction
    });
  }

  render(){
    let titleHeader = <th scope="col" onClick={this.handleHeaderClick('title')}>Title</th>;
    if(this.state.sort_column === 'title') {
      titleHeader = <th scope="col" onClick={this.handleHeaderClick('title')}>Title <FontAwesomeIcon icon={faSortUp} /></th>;
      if(this.state.sort_direction === 'desc') {
        titleHeader = <th scope="col" onClick={this.handleHeaderClick('title')}>Title <FontAwesomeIcon icon={faSortDown} /></th>;
      }
    }
    let yearHeader = <th scope="col" onClick={this.handleHeaderClick('year')}>Release Year</th>;
    if(this.state.sort_column === 'year') {
      yearHeader = <th scope="col" onClick={this.handleHeaderClick('year')}>Release Year <FontAwesomeIcon icon={faSortUp} /></th>;
      if(this.state.sort_direction === 'desc') {
        yearHeader = <th scope="col" onClick={this.handleHeaderClick('year')}>Release Year <FontAwesomeIcon icon={faSortDown} /></th>;
      }
    }
    let scoreHeader = <th scope="col" onClick={this.handleHeaderClick('score')}>Movie Score</th>;
    if(this.state.sort_column === 'score') {
      scoreHeader = <th scope="col" onClick={this.handleHeaderClick('score')}>Movie Score <FontAwesomeIcon icon={faSortUp} /></th>;
      if(this.state.sort_direction === 'desc') {
        scoreHeader = <th scope="col" onClick={this.handleHeaderClick('score')}>Movie Score <FontAwesomeIcon icon={faSortDown} /></th>;
      }
    }
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
                  {titleHeader}
                  {yearHeader}
                  {scoreHeader}
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
