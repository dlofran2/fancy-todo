import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MiniTodo from '../MiniTodo';

import './MiniTodoWrapper.css';

class MiniTodoWrapper extends Component {
  render() {
    const { title, todos } = this.props;
    return (
      <div className="miniTodoWrapperContainer">
        <MiniTodo title={title} todos={todos} />
      </div>
    );
  }
}

MiniTodoWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default MiniTodoWrapper;
