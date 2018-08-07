import React, { Component } from 'react';
import classNames from 'classnames';

import home from '../../assets/home.svg';
import temp1 from '../../assets/gift.svg';
import temp2 from '../../assets/layers.svg';

import styles from './NavBar.scss';

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
      <nav className={styles.container}>
        <button
          className={classNames(styles.navBarButton, styles.navBarButtonHome)}
          onClick={this.goToHomeRoute}
        >
          <img src={home} alt="Home" className={styles.navImage} />
        </button>
        <button
          className={classNames(styles.navBarButton, styles.navBarButtonTemp1)}
          onClick={this.goToTemp1Route}
        >
          <img src={temp1} alt="Temp1" className={styles.navImage} />
        </button>
        <button
          className={classNames(
            styles.navBarButton,
            styles.navBarButtonSettings,
          )}
          onClick={this.goToSettingsRoute}
        >
          <img src={temp2} alt="Settings" className={styles.navImage} />
        </button>
      </nav>
    );
  }
}

export default NavBar;
