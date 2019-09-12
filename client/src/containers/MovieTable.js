import React, { Component } from 'react';
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
  };

  handleHeaderClick = column => {
    sortMovie(this.state);
    this.setState({
      sort_column: column,
      sort_direction: toggle(this.state.sort_direction)
    });
  };
