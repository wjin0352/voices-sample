import axios from 'axios';

export function getShows(data) {
  // URL: /search/shows?q=:query
  // Example: http://api.tvmaze.com/search/shows?q=girls
  console.log('data', data);
  const endPoint = `http://api.tvmaze.com/search/shows?q=${data.showTitle}`;

  return (dispatch) => {
    console.log(endPoint)
    axios.get(endPoint)
      .then(results => { 
        console.log('RESPONSE: ', results);
        dispatch(showsSuccess(results));
      })
      .catch(error => { 
        console.log('ERROR: ', error);
        dispatch(showsError(error));
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