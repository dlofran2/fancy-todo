import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TinyTodoWrapper.scss';

class TinyTodoWrapper extends Component {
  render() {
    return (
      <div className={styles.container}>
        {
          this.props.lists.map((todo, idx) => {
            if (todo.id === this.props.currentList) {
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

TinyTodoWrapper.propTypes = {
  lists: PropTypes.array.isRequired,
  currentList: PropTypes.number.isRequired,
};

export default TinyTodoWrapper;
