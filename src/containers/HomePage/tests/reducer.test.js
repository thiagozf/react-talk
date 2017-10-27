import { fromJS } from 'immutable';

import Todo from 'models/Todo';

import homeReducer from '../reducer';
import { loadTodos, todosLoadingError, todosLoaded, toggleTodo } from '../actions';

describe('homeReducer tests', () => {
  it('should load initial state', () => {
    const state = homeReducer(undefined, { type: 'OTHER' });
    expect(state).toMatchSnapshot();
  });

  it('should load todos', () => {
    const state = homeReducer(undefined, loadTodos());
    expect(state.get('loading')).toBeTruthy();
    expect(state.get('error')).toBeFalsy();
    expect(state.getIn(['data', 'todos'])).toBeFalsy();
  });

  it('should store errors', () => {
    const error = 'homeReducer#error';
    const state = homeReducer(undefined, todosLoadingError(error));
    expect(state.get('loading')).toBeFalsy();
    expect(state.get('error')).toBe(error);
  });

  it('should store successfully loaded todos', () => {
    const todos = [new Todo({ id: 'test', text: 'testing stuff', done: true })];
    const state = homeReducer(undefined, todosLoaded(todos));
    expect(state.get('loading')).toBeFalsy();
    expect(state.get('error')).toBeFalsy();
    expect(state.getIn(['data', 'todos'])).toBe(todos);
  });

  it('should toggle todo\'s "done" state', () => {
    const initialState = fromJS({
      loading: false,
      error: false,
      data: {
        todos: [
          new Todo({ id: '1', text: 'test1', done: false }),
          new Todo({ id: '2', text: 'test2', done: false }),
        ],
      },
    });
    const state = homeReducer(initialState, toggleTodo('2', true));
    expect(state.getIn(['data', 'todos', 0, 'done'])).toBeFalsy();
    expect(state.getIn(['data', 'todos', 1, 'done'])).toBeTruthy();
  });
});
