import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddButton.css';

class AddButton extends Component {
  render() {
    const { text, onButtonClick } = this.props;
    return (
      <div className="addButtonContainer">
        <button className="addButton" onClick={onButtonClick}>
          +
        </button>
        <p className="addText">{text}</p>
      </div>
    );
  }
}

AddButton.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

export default AddButton;
