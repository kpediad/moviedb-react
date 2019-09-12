import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

class MovieShow extends Component {

  constructor() {
    super();
  }

  handleDeleteClick = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    //const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    //addMovie(this.state);
    // redirect to /movies route
    //history.push('/movies')
  }

  handleEditClick = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    //const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    //addMovie(this.state);
    // redirect to /movies route
    //history.push('/movies')
  }

  handleUpvoteClick = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    //const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    //addMovie(this.state);
    // redirect to /movies route
    //history.push('/movies')
  }

  handleDownvoteClick = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    //const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    //addMovie(this.state);
    // redirect to /movies route
    //history.push('/movies')
  }

  render(){
    return (
      <div className="container" >
        <div className="row justify-content-center">
          <table className="table bg-light" style={{textAlign: 'center'}}>
            <thead>
              <tr className="table-primary">
                <th colspan="3" scope="col" id="movie">{this.props.movie.title}</th>
              </tr>
              <tr>
                <th id="year">Year: {this.props.movie.release_year}</th>
                <th id="score">Score: </th>
              </tr>
              <tr className="table-primary" style={{textAlign: 'center'}}>
                <th colspan="3" scope="col">Synopsis</th>
              </tr>
              <tr style={{textAlign: 'justify'}}>
                <td colspan="3" id="synopsis">{this.props.movie.synopsis}</td>
              </tr>
            </thead>
            <tbody>
              <tr className="table-light">
                <td>
                  <button className="btn btn-primary" onClick={this.handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit Movie</button>
                </td>
                <td>
                  <button className="btn btn-success" onClick={this.handleUpvoteClick}><FontAwesomeIcon icon={faThumbsUp} /> Upvote</button>
                </td>
              </tr>
              <tr className="table-light">
                <td>
                  <button className="btn btn-danger" onClick={this.handleDeleteClick}><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                </td>
                <td>
                  <button className="btn btn-warning" onClick={this.handleDownvoteClick}><FontAwesomeIcon icon={faThumbsDown} /> Downvote</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)

  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}

export default connect(mapStateToProps)(MovieShow);
