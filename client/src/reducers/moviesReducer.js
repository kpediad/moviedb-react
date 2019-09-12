export default (state = [], action) => {
  let idx;
  
  switch (action.type) {

    case 'ADD_MOVIE':
      return [ ...state, action.movie ];

    case 'DELETE_MOVIE':
      idx = state.map(movie => movie.id).indexOf(action.movie.id);
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length));

    case 'FETCH_MOVIES':
      return action.movies;

    default:
      return state;
  }
};
