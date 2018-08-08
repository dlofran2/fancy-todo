import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Todo from '../Todo';

import styles from './FullTodo.scss';

class FullTodo extends Component {
  render() {
    const calgaryTodos = [
      {
        item: 'add Erin to pass rider',
        status: true,
        date: 'Mon, Apr 30',
      },
      {
        item: 'book SA tickets',
        status: false,
      },
      {
        item: 'get day off',
        status: false,
        date: 'Mon, Apr 30',
      },
      {
        item: 'find hiking boots',
        status: false,
      },
      {
        item: 'add Erin to pass rider',
        status: true,
        date: 'Mon, Apr 30',
      },
      {
        item: 'book SA tickets',
        status: false,
      },
      {
        item: 'get day off',
        status: false,
        date: 'Mon, Apr 30',
      },
      {
        item: 'find hiking boots',
        status: false,
      },
      {
        item: 'add Erin to pass rider',
        status: true,
        date: 'Mon, Apr 30',
      },
      {
        item: 'book SA tickets',
        status: false,
      },
      {
        item: 'get day off',
        status: false,
        date: 'Mon, Apr 30',
      },
      {
        item: 'find hiking boots',
        status: false,
      },
      {
        item: 'add Erin to pass rider',
        status: true,
        date: 'Mon, Apr 30',
      },
      {
        item: 'book SA tickets',
        status: false,
      },
      {
        item: 'get day off',
        status: false,
        date: 'Mon, Apr 30',
      },
      {
        item: 'find hiking boots',
        status: false,
      },
    ];

    const todos = calgaryTodos.map((todo, idx) => {
      return <Todo key={idx} todo={todo} />;
    });

    return (
      <div className={styles.container}>
        <ul>{todos}</ul>
      </div>
    );
  }
}

FullTodo.propTypes = {};

export default FullTodo;
