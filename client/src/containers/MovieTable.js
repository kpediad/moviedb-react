import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import { connect } from 'react-redux';
import { sortMovies } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class MovieTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort_column: 'title',
      sort_direction: 'asc'
    };
    window.sort_column = 'title';
    window.sort_direction = 'asc';
  }

  toggle = direction => {
    if (direction === 'asc') {
      return 'desc';
    }
    else {
      return 'asc';
    }
  }

  handleHeaderClick = (event, column) => {
    event.preventDefault();
    let new_sort_direction = 'asc';
    if (column === this.state.sort_column) {
      new_sort_direction = this.toggle(this.state.sort_direction);
    }
    const { sortMovies } = this.props;
    sortMovies(column, new_sort_direction);
    this.setState({
      sort_column: column,
      sort_direction: new_sort_direction
    });
    window.sort_column = column;
    window.sort_direction = new_sort_direction;
  }

  render(){
    let titleHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'title')} to='' style={{ textDecoration: 'none' }}>Title</Link></th>;
    if(this.state.sort_column === 'title') {
      titleHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'title')} to='' style={{ textDecoration: 'none' }}>Title <FontAwesomeIcon icon={faSortUp} /></Link></th>;
      if(this.state.sort_direction === 'desc') {
        titleHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'title')} to='' style={{ textDecoration: 'none' }}>Title <FontAwesomeIcon icon={faSortDown} /></Link></th>;
      }
    }
    let yearHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'year')} to='' style={{ textDecoration: 'none' }}>Release Year</Link></th>;
    if(this.state.sort_column === 'year') {
      yearHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'year')} to='' style={{ textDecoration: 'none' }}>Release Year <FontAwesomeIcon icon={faSortUp} /></Link></th>;
      if(this.state.sort_direction === 'desc') {
        yearHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'year')} to='' style={{ textDecoration: 'none' }}>Release Year <FontAwesomeIcon icon={faSortDown} /></Link></th>;
      }
    }
    let scoreHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'score')} to='' style={{ textDecoration: 'none' }}>Movie Score</Link></th>;
    if(this.state.sort_column === 'score') {
      scoreHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'score')} to='' style={{ textDecoration: 'none' }}>Movie Score <FontAwesomeIcon icon={faSortUp} /></Link></th>;
      if(this.state.sort_direction === 'desc') {
        scoreHeader = <th scope="col"><Link onClick={event => this.handleHeaderClick(event, 'score')} to='' style={{ textDecoration: 'none' }}>Movie Score <FontAwesomeIcon icon={faSortDown} /></Link></th>;
      }
    }
    return (
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table table-bordered bg-light" style={{textAlign: 'center'}}>
              <thead>
                <tr className="table-primary">
                  <th colSpan="3" scope="col">Movies List</th>
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

export default connect(null, {sortMovies})(MovieTable);
