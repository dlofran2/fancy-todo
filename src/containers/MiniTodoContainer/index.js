import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import MiniTodoWrapper from '../../components/MiniTodoWrapper';

import styles from './MiniTodoContainer.scss';

class MiniTodoContainer extends Component {
  render() {
    const calgaryTodos = [
      'add Erin to pass rider sasdasdasdasdasdasd',
      'book SA tickets',
      'get day off',
      'find hiking boots',
      'eat pie',
      'add Erin to pass rider sasdasdasdasdasdasd',
      'book SA tickets',
      'get day off',
      'find hiking boots',
      'eat pie',
    ];
    return (
      <div className={styles.miniTodoContainerContainer}>
        <MiniTodoWrapper title={'Trip to YYC'} todos={calgaryTodos} />
        <MiniTodoWrapper title={'Trip to YYC'} todos={calgaryTodos} />
        <MiniTodoWrapper title={'Trip to YYC'} todos={calgaryTodos} />
      </div>
    );
  }
}

MiniTodoContainer.propTypes = {};

export default MiniTodoContainer;
