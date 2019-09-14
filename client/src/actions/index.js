export function addMovie(movie) {
  console.log(JSON.stringify({movie: movie}));
  console.log({movie: movie});
  return function(dispatch){
    return fetch('/movies', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie: movie})
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        console.log(responseJson);
      //dispatch({type: 'ADD_MOVIE', movie})
    })
  }
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
    return fetch('/movies')
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
