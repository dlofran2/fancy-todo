import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo';

import styles from './FullTodo.scss';

class FullTodo extends Component {
  render() {
    const { todos } = this.props;
    const list = todos.map((todo, idx) => {
      return <Todo key={idx} todo={todo} />;
    });

    return (
      <div className={styles.container}>
        <ul>{list}</ul>
      </div>
    );
  }
}

FullTodo.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default FullTodo;
