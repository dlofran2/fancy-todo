import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './AddButton.scss';

class AddButton extends Component {
  render() {
    const { text, onButtonClick } = this.props;
    return (
      <div className={styles.container}>
        <button className={styles.addButton} onClick={onButtonClick}>
          +
        </button>
        <p className={styles.text}>{text}</p>
      </div>
    );
  }
}

AddButton.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

export default AddButton;