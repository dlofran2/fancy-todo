import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MiniTodo from '../MiniTodo';

import styles from './MiniTodoWrapper.scss';

class MiniTodoWrapper extends Component {
  render() {
    const { title, todos } = this.props;
    return (
      <div className={styles.container}>
        <MiniTodo title={title} todos={todos} />
      </div>
    );
  }
}

MiniTodoWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default MiniTodoWrapper;
