// @flow

// Saga:  a "long-lived business transaction or process"

import { call, put, /*select, */takeLatest } from 'redux-saga/effects';
import Todo, { type TTodo } from 'models/Todo';

import { LOAD_TODOS } from './constants';
import { todosLoaded, todosLoadingError } from './actions';

// import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function* getTodos(): Generator<*, *, *> {
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(sleep, 2000);
    const todos: Array<TTodo> = [
      new Todo({
        id: '1',
        text: 'Apresentação sobre React',
        done: false,
      }),
      new Todo({
        id: '2',
        text: 'Desenvolver PoC do serviço de Templates',
        done: false,
      }),
      new Todo({
        id: '5',
        text: 'Melhorar o exemplo da apresentação React',
        done: false,
      }),
      new Todo({
        id: '3',
        text: 'Ir na farmácia',
        done: true,
      }),
      new Todo({
        id: '4',
        text: 'Comprar ração para o doge',
        done: true,
      }),
    ];
    yield put(todosLoaded(todos));
  } catch (err) {
    yield put(todosLoadingError(err));
  }
};

export default function* todosData(): Generator<*, *, *> {
  // Watches for LOAD_TODOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TODOS, getTodos);
};
