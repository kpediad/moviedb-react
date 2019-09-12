let counter = 3;

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
