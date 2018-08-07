import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MiniTodo.scss';

class MiniTodo extends Component {
  render() {
    const { title, todos } = this.props;
    const todosList = todos.slice(0, 4).map((todo, idx) => (
      <li className={styles.miniTodoListItem} key={idx}>
        <input disabled type="checkbox" />
        <span>{todo}</span>
      </li>
    ));

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.miniTodoList}>{todosList}</ul>
      </div>
    );
  }
}

MiniTodo.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default MiniTodo;
