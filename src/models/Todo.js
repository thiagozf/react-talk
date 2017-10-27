// @flow

// $FlowFixMe
import { Record, type RecordFactory } from 'immutable';

export type TTodo = {
  id: string,
  text: string,
  done: boolean,
};

const Todo: RecordFactory<TTodo> = Record({
  id: '',
  text: '',
  done: false,
});

export default Todo;
