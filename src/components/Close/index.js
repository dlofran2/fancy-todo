import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import close from '../../assets/cancel.svg';

import styles from './Close.scss';

class Close extends Component {
  render() {
    return (
      <Link to="/">
        <img src={close} alt={'Close'} className={styles.close} />
      </Link>
    );
  }
}

Close.propTypes = {};

export default Close;
