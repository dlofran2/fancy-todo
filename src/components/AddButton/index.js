import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './AddButton.scss';

class AddButton extends Component {
  render() {
    const { text, onButtonClick } = this.props;
    return (
      <div>
        <button className={styles.addButton} onClick={onButtonClick}>
          +
        </button>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    );
  }
}

AddButton.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

export default AddButton;
