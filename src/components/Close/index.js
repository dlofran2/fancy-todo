import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import close from '../../assets/cancel.svg';

import styles from './Close.scss';

class Close extends Component {
  render() {
    return <img src={close} alt={'Close'} className={styles.close} />;
  }
}

Close.propTypes = {};

export default Close;
