import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MiniTodo from '../MiniTodo';

import styles from './MiniTodoWrapper.scss';

class MiniTodoWrapper extends Component {
  render() {
    const { title, todos, id } = this.props;
    return (
      <div className={styles.container}>
        <MiniTodo title={title} todos={todos} id={id} />
      </div>
    );
  }
}

MiniTodoWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default MiniTodoWrapper;
