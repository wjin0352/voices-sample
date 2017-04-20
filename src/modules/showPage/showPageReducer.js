import * as actions from './showPageAction';

const initialState = {
  showPage: {},
  showPageError: ''
}

const showDetail = (state = {initialState}, action) => {
  switch(action.type) {
    case 'SHOW_DELETE':
    return {
      ...state
    }
  default: 
    return state;
  }
}