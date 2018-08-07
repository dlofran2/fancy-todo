import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';
import RouteTitle from '../../components/RouteTitle';
import AddButton from '../../components/AddButton';
import MiniTodoContainer from '../MiniTodoContainer';
import NavBar from '../../components/NavBar';

import './TaskListContainer.css';

class TaskListContainer extends Component {
  addList = () => {
    console.log('were trying to add a list');
  };
  render() {
    return (
      <section className="gridParent">
        <div className="logoGridChild">
          <Logo />
        </div>
        <div className="routeTitleGridChild">
          <RouteTitle title={'Tasks Lists'} />
        </div>
        <div className="addButtonGridChild">
          <AddButton text={'Add List'} onButtonClick={this.addList} />
        </div>
        <div className="miniTodoContainerGridChild">
          <MiniTodoContainer />
        </div>
        <div className="navBarGridChild">
          <NavBar />
        </div>
      </section>
    );
  }
}

TaskListContainer.propTypes = {};

export default TaskListContainer;
