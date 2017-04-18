import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import shows from '../../modules/findShows/findShowsReducer';

export default combineReducers({
  form: formReducer,
  shows: shows
});

