import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RouteTitle.css';

class RouteTitle extends Component {
  render() {
    const titleSplit = this.props.title.split(' ');

    return (
      <div className="routeTitleContainer">
        <div className="splitLeft" />
        <h1 className="splitZero">
          {titleSplit[0]} <span className="splitOne">{titleSplit[1]}</span>
        </h1>
        <div className="splitRight" />
      </div>
    );
  }
}

RouteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RouteTitle;
