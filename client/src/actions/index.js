export function addMovie(movie) {
  return function(dispatch){
    return fetch('/movies', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie: movie})
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        console.log(responseJson);
        if (responseJson.message) {
          console.error(responseJson.message);
          return {error: responseJson.message};
        }
        dispatch({type: 'ADD_MOVIE', movie: responseJson})
    }).catch(error => {
        console.error(error);
        return {error: error};
      });
  }
}

export function deleteMovie(movie) {
  return function(dispatch){
    return fetch(`/movies/${movie.id}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie: movie})
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        if (responseJson.message) {
          console.error(responseJson.message);
          return {error: responseJson.message};
        }
        dispatch({type: 'DELETE_MOVIE', movie: responseJson})
    }).catch(error => {
        console.error(error);
        return {error: error};
      });
  }
}

export function editMovie(movie) {
  return function(dispatch){
    return fetch(`/movies/${movie.id}`, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie: movie})
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        if (responseJson.message) {
          console.error(responseJson.message);
          return {error: responseJson.message};
        }
        dispatch({type: 'EDIT_MOVIE', movie: responseJson})
    }).catch(error => {
        console.error(error);
        return {error: error};
      });
  }
}

export function upvoteMovie(movie) {
  return function(dispatch){
    return fetch(`/movies/${movie.id}`, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie: movie})
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        if (responseJson.message) {
          console.error(responseJson.message);
          return {error: responseJson.message};
        }
        dispatch({type: 'UPVOTE_MOVIE', movie: responseJson})
    }).catch(error => {
        console.error(error);
        return {error: error};
      });
  }
}

export function downvoteMovie(movie) {
  return function(dispatch){
    return fetch(`/movies/${movie.id}`, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie: movie})
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        if (responseJson.message) {
          console.error(responseJson.message);
          return {error: responseJson.message};
        }
        dispatch({type: 'DOWNVOTE_MOVIE', movie: responseJson})
    }).catch(error => {
        console.error(error);
        return {error: error};
      });
  }
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
    }).catch(error => {
        console.error(error);
        return {error: error};
      });
  }
}

export function loadingMovies(){
  return {
    type: 'LOADING_MOVIES',
    movies : []
  };
}
