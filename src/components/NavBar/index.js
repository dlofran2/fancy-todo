import React, { Component } from 'react';
import classNames from 'classnames';

import home from '../../assets/home.svg';
import temp1 from '../../assets/gift.svg';
import temp2 from '../../assets/layers.svg';

import './NavBar.css';

class NavBar extends Component {
  goToHomeRoute = () => {
    console.log('go to home route');
  };

  goToTemp1Route = () => {
    console.log('go to temp1');
  };

  goToSettingsRoute = () => {
    console.log('go to settings route');
  };

  render() {
    return (
      <nav className="navBarContainer">
        <button
          className={classNames('navBarHome', 'navBarButton')}
          onClick={this.goToHomeRoute}
        >
          <img src={home} alt="Home" className="navImage" />
        </button>
        <button
          className={classNames('navBarTemp1', 'navBarButton')}
          onClick={this.goToTemp1Route}
        >
          <img src={temp1} alt="Temp1" className="navImage" />
        </button>
        <button
          className={classNames('navBarSettings', 'navBarButton')}
          onClick={this.goToSettingsRoute}
        >
          <img src={temp2} alt="Settings" className="navImage" />
        </button>
      </nav>
    );
  }
}

export default NavBar;
