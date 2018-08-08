import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FullTaskTitle.scss';

class FullTaskTitle extends Component {
  render() {
    const { title, currentList, totalList } = this.props;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.listNumber}>
          {currentList} to {totalList} tasks
        </h2>
        <div className={styles.separator} />
      </div>
    );
  }
}

FullTaskTitle.propTypes = {
  title: PropTypes.string.isRequired,
  currentList: PropTypes.number.isRequired,
  totalList: PropTypes.number.isRequired,
};

export default FullTaskTitle;
