import * as actions from './findShowsAction';

const initialState = {
  newShows: [{}],
  showsError: ''
}

const shows = (state={initialState}, action) => {
  switch(action.type) {
    case 'SHOWS_SUCCESS': 
      return {
        ...state,
        newShows: action.data
      }
    case 'SHOWS_ERROR': 
      return {
        ...state,
        showsError: action.error
      }
    default: 
      return state;
  }
}

export default shows;