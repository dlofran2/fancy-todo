import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Todo.scss';

class Todo extends Component {
  render() {
    const { todo } = this.props;
    const { item, status, date } = todo;

    if (status)
      return (
        <li
          className={classNames(styles.todoItem, styles.complete, styles.text)}
        >
          <span className={styles.text}>
            <p className={styles.item}>{item}</p>
            {date && <p className={styles.date}>{date}</p>}
          </span>
        </li>
      );

    return (
      <li className={classNames(styles.todoItem, styles.text)}>
        <label className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span className={styles.checkmark} />
        </label>
        <span className={styles.text}>
          <p className={styles.item}>{item}</p>
          {date && <p className={styles.date}>{date}</p>}
        </span>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    item: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    date: PropTypes.string,
  }),
};

export default Todo;
