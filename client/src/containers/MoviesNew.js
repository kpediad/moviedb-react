import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';

class MoviesNew extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
      release_year: '',
      synopsis: '',
      score: 0
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    addMovie(this.state).then(result => {
      if (result.error) {
        alert(result.error);
        return;
      }
      // redirect to /movies route
      history.push(`/movies/${result.id}`);
    });
  }

  handleOnCancel = event => {
    event.preventDefault();
    // Destructure history from the components props
    const { history } = this.props;
    // redirect to /movies route
    history.push('/movies');
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
              <h3 style={{textAlign: 'center'}}>Add a new Movie</h3>
              <div className="form-group">
                <form onSubmit={this.handleOnSubmit} >
                  <label className="col-form-label col-form-label-sm">Title: </label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={this.handleTitleOnChange} />
                  <label className="col-form-label col-form-label-sm">Release Year: </label>
                  <input
                    className="form-control"
                    type="number"
                    onChange={this.handleYearOnChange} />
                  <label className="col-form-label col-form-label-sm">Synopsis: </label>
                  <textarea className="form-control" rows="8" onChange={this.handleSynopsisOnChange} />
                  <br />
                  <div className="row">
                    <div className="col-6">
                      <button type="submit" className="btn btn-success"><FontAwesomeIcon icon={faPlusSquare} /> Add Movie</button>
                    </div>
                    <div className="col-6 text-right">
                      <button className="btn btn-danger" onClick={this.handleOnCancel}><FontAwesomeIcon icon={faWindowClose} /> Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addMovie })(MoviesNew)
