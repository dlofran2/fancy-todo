import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './RouteTitle.scss';

class RouteTitle extends Component {
  render() {
    const titleSplit = this.props.title.split(' ');

    return (
      <div className={styles.container}>
        <div
          className={classNames(styles.splitBorder, styles.splitBorderLeft)}
        />
        <h1 className={classNames(styles.splitText, styles.splitTextZero)}>
          {titleSplit[0]}{' '}
          <span className={classNames(styles.splitText, styles.splitTextOne)}>
            {titleSplit[1]}
          </span>
        </h1>
        <div
          className={classNames(styles.splitBorder, styles.splitBorderRight)}
        />
      </div>
    );
  }
}

RouteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RouteTitle;
