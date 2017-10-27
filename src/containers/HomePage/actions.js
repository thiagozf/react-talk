// @flow

import {
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
  TOGGLE_TODO,
} from 'containers/HomePage/constants';

import { type TTodo } from 'models/Todo';

export const loadTodos = () => ({ type: LOAD_TODOS });

export const todosLoaded = (todos: Array<TTodo>) => ({
  type: LOAD_TODOS_SUCCESS,
  todos,
});

export const todosLoadingError = (error: string) => ({
  type: LOAD_TODOS_ERROR,
  error,
});

export const toggleTodo = (id: string, done: boolean) => ({
  type: TOGGLE_TODO,
  id,
  done,
});
