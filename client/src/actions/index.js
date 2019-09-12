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
