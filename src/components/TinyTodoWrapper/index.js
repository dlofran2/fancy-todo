import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TinyTodoWrapper.scss';

class TinyTodoWrapper extends Component {
  render() {
    const tinyTodos = [false, false, false, true, false, false];

    return (
      <div className={styles.container}>
        {tinyTodos.map((todo, idx) => {
          if (todo) {
            return (
              <div
                key={idx}
                className={classNames(styles.tinyTodo, styles.active)}
              />
            );
          }

          return (
            <div
              key={idx}
              className={classNames(styles.tinyTodo, styles.inactive)}
            />
          );
        })}
      </div>
    );
  }
}

TinyTodoWrapper.propTypes = {};

export default TinyTodoWrapper;
