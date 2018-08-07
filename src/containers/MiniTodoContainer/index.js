import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MiniTodoWrapper from '../../components/MiniTodoWrapper';

import './MiniTodoContainer.css';

class MiniTodoContainer extends Component {
  render() {
    const calgaryTodos = [
      'add Erin to pass rider sasdasdasdasdasdasd',
      'book SA tickets',
      'get day off',
      'find hiking boots',
      'eat pie',
    ];
    return (
      <div className="miniTodoContainerContainer">
        <MiniTodoWrapper title={'Trip to YYC'} todos={calgaryTodos} />
        <MiniTodoWrapper title={'Trip to YYC'} todos={calgaryTodos} />
        <MiniTodoWrapper title={'Trip to YYC'} todos={calgaryTodos} />
      </div>
    );
  }
}

MiniTodoContainer.propTypes = {};

export default MiniTodoContainer;
