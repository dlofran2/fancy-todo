import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import RouteTitle from 'components/RouteTitle';
import AddButton from 'components/AddButton';
import MiniTodoContainer from 'containers/MiniTodoContainer';
import NavBar from 'components/NavBar';

import styles from './TaskListContainer.scss';

class TaskListContainer extends Component {
  addList = () => {
    console.log('were trying to add a list');
  };
  render() {
    return (
      <section className={styles.gridParent}>
        <div className={styles.logoGridChild}>
          <Logo />
        </div>
        <div className={styles.routeTitleGridChild}>
          <RouteTitle title={'Tasks Lists'} />
        </div>
        <div className={styles.addButtonGridChild}>
          <AddButton text={'Add List'} onButtonClick={this.addList} />
        </div>
        <div className={styles.miniTodoContainerGridChild}>
          <MiniTodoContainer />
        </div>
        <div className={styles.navBarGridChild}>
          <NavBar />
        </div>
      </section>
    );
  }
}

TaskListContainer.propTypes = {};

export default TaskListContainer;
