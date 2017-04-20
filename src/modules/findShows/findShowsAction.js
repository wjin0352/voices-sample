import axios from 'axios';
import history from '../history';

export function getShows(data) {
  // URL: /search/shows?q=:query
  // Example: http://api.tvmaze.com/search/shows?q=girls
  const endPoint = `http://api.tvmaze.com/search/shows?q=${data.showTitle}`;

  return (dispatch) => {
    axios.get(endPoint)
      .then(results => { 
        dispatch(showsSuccess(results.data));
        history.push('/showIndex');
      })
      .catch(error => { 
        dispatch(showsError(error));
        history.push('/')
      })
  };
}

export function showsSuccess(data) {
  return {
    type: 'SHOWS_SUCCESS',
    data
  };
}

export function showsError(error) {
  return {
    type: 'SHOWS_ERROR',
    error
  };
}

