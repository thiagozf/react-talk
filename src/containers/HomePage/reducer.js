import { fromJS } from 'immutable';

import {
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS,
  LOAD_TODOS_ERROR,
  TOGGLE_TODO,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    todos: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'todos'], false);
    case LOAD_TODOS_SUCCESS:
      return state
        .setIn(['data', 'todos'], action.todos)
        .set('loading', false);
    case LOAD_TODOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case TOGGLE_TODO:
      return state
        .setIn(['data', 'todos'], state.get('data').get('todos').map((todo) =>
          (todo.id === action.id) ? todo.set('done', action.done) : todo )
        );
    default:
      return state;
  }
}

export default homeReducer;
