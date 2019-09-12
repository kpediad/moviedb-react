import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMovie } from '../actions';
import { Link } from 'react-router-dom';

class MoviesEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      release_year: this.props.movie.release_year,
      synopsis: this.props.movie.synopsis,
      score: this.props.movie.score
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    const { editMovie, history } = this.props;
    // Create the movie with the Redux action
    editMovie(this.state);
    // redirect to /movies route
    history.push('/movies')
  }

  handleTitleOnChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  handleYearOnChange = event => {
    this.setState({
      release_year: event.target.value
    });
  }

  handleSynopsisOnChange = event => {
    this.setState({
      synopsis: event.target.value
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="form-box">
              <h3 style={{textAlign: 'center'}}>Edit Movie</h3>
              <div className="form-group">
                <form onSubmit={this.handleOnSubmit} >
                  <label className="col-form-label col-form-label-sm">Title: </label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={this.handleTitleOnChange}
                    value={this.state.title}/>
                  <label className="col-form-label col-form-label-sm">Release Year: </label>
                  <input
                    className="form-control"
                    type="number"
                    onChange={this.handleYearOnChange}
                    value={this.state.release_year} />
                  <label className="col-form-label col-form-label-sm">Synopsis: </label>
                  <textarea className="form-control" rows="8" onChange={this.handleSynopsisOnChange} value={this.state.synopsis}/>
                  <br />
                  <input type="submit" className="btn btn-primary" value="Edit Movie" />
                </form>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, {editMovie})(MoviesEdit);
