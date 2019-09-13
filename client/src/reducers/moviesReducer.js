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

    case 'UPVOTE_MOVIE':
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      selectedMovie = state[idx];
      selectedMovie.score++;
      return [].concat(state.slice(0, idx), selectedMovie, state.slice(idx + 1, state.length));

    case 'DOWNVOTE_MOVIE':
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      selectedMovie = state[idx];
      selectedMovie.score--;
      return [].concat(state.slice(0, idx), selectedMovie, state.slice(idx + 1, state.length));

    case 'SORT_MOVIES':
      switch (action.column) {

        case 'title':
          if(action.direction === 'asc') {
            return state.slice().sort(function(a,b){
              return a.title.localeCompare(b.title);
            });
          } else {
            return state.slice().sort(function(a,b){
              return b.title.localeCompare(a.title);
            });
          }

        case 'year':
          if(action.direction === 'asc') {
            return state.slice().sort(function(a, b) {
              return a.release_year - b.release_year;
            });
          } else {
            return state.slice().sort(function(a, b) {
              return b.release_year - a.release_year;
            });
          }

        case 'score':
          if(action.direction === 'asc') {
            return state.slice().sort(function(a, b) {
              return a.score - b.score;
            });
          } else {
            return state.slice().sort(function(a, b) {
              return b.score - a.score;
            });
          }

        default:
          return state;
      }

    case 'FETCH_MOVIES':
      return action.movies;

    default:
      return state;
  }
};
