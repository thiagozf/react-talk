// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { List, ListItem } from 'components/List';
import Loading from 'components/Loading';

import Todo, { type TTodo } from 'models/Todo';

import { loadTodos, toggleTodo } from './actions';

import reducer from './reducer';
import saga from './saga';

type Dispatch = {
  loadTodos: () => void,
  toggleTodo: (id: string, done: boolean) => void,
};

type State = {
  loading: boolean,
  error: string,
  todos: Array<Todo>,
};

type Props = State & Dispatch;

const HomePageWrapper = styled.div`
  flex: 1;
`;

export class HomePage extends Component<Props> {
  static defaultProps = {
     loadTodos: () => {},
  };

  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos();
  }

  render() {
    const {
      loading,
      todos,
      toggleTodo,
    } = this.props;

    const todosListItems = todos ? todos.map((t: TTodo) => (
      <ListItem onClick={(checked: boolean) => toggleTodo(t.id, checked)} checked={t.done} key={`todo-${t.id}`} text={t.text} />
    )) : null;
    const content = loading ? (<Loading />) : (<List>{todosListItems}</List>);

    return (
      <HomePageWrapper>
        {content}
      </HomePageWrapper>
    );
  }
}

export const mapDispatchToProps = (dispatch: (action: Object) => void) => {
  return {
    loadTodos: () => { dispatch(loadTodos()); },
    toggleTodo: (id: string, done: boolean) => { dispatch(toggleTodo(id, done)); },
  };
}

const mapStateToProps = (state): State => ({
  loading: state.get('app').get('loading'),
  error: state.get('app').get('error'),
  todos: state.get('app').get('data').get('todos'),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
