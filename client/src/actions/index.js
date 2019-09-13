let counter = 10;

export function addMovie(movie) {
  movie.id = ++counter;
  return {
    type: 'ADD_MOVIE',
    movie
  };
}

export function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    movie
  };
}

export function editMovie(movie) {
  return {
    type: 'EDIT_MOVIE',
    movie
  };
}

export function upvoteMovie(movie) {
  return {
    type: 'UPVOTE_MOVIE',
    movie
  };
}

export function downvoteMovie(movie) {
  return {
    type: 'DOWNVOTE_MOVIE',
    movie
  };
}

export function sortMovies(column, direction) {
  return {
    type: 'SORT_MOVIES',
    column,
    direction
  };
}

export function fetchMovies() {

  return function(dispatch){
    dispatch({type: 'LOADING_MOVIES'})
    return fetch('/movies.json')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_MOVIES', movies: responseJson})
        dispatch({type: 'SORT_MOVIES', column: 'title', direction: 'asc'})
    })

  }
}

export function loadingMovies(){
  return {
    type: 'LOADING_MOVIES',
    movies : []
  };
}
