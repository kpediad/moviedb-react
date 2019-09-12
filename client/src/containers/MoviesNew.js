import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class MoviesNew extends Component {

  constructor() {
    super();

    this.state = {
      title: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    addMovie(this.state);
    // redirect to /movies route
    history.push('/movies')
  }

  handleOnChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="form-box">
              <h3 style={{textAlign: 'center'}}>Add a new Movie</h3>
              <div className="form-group">
                <form onSubmit={this.handleOnSubmit} >
                  <label className="col-form-label col-form-label-sm">Title: </label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={this.handleOnChange} />
                  <label className="col-form-label col-form-label-sm">Release Year: </label>
                  <input
                    className="form-control"
                    type="number"
                    onChange={this.handleOnChange} />
                  <label className="col-form-label col-form-label-sm">Synopsis: </label>
                  <textarea className="form-control" rows="4" onChange={this.handleOnChange} />
                  <br />
                  <input type="submit" className="btn btn-success" value="Add Movie" />
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
