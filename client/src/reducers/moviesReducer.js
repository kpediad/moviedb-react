export default (state = [], action) => {
  let idx;
  let selectedMovie;
  switch (action.type) {

    case 'ADD_MOVIE':
      return [ ...state, action.movie ];

    case 'DELETE_MOVIE':
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length));

    case 'EDIT_MOVIE':
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      return [].concat(state.slice(0, idx), action.movie, state.slice(idx + 1, state.length));

    case "UPVOTE_MOVIE":
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      selectedMovie = state[idx];
      selectedMovie.score++;
      return [].concat(state.slice(0, idx), selectedMovie, state.slice(idx + 1, state.length));

    case "DOWNVOTE_MOVIE":
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      selectedMovie = state[idx];
      selectedMovie.score--;
      return [].concat(state.slice(0, idx), selectedMovie, state.slice(idx + 1, state.length));

    case 'FETCH_MOVIES':
      return action.movies;

    default:
      return state;
  }
};
