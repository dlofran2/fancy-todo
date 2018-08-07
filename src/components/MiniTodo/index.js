import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MiniTodo.css';

class MiniTodo extends Component {
  render() {
    const { title, todos } = this.props;
    const todosList = todos.slice(0, 4).map((todo, idx) => (
      <li className="miniTodoListItem" key={idx}>
        <input disabled type="checkbox" />
        <span>{todo}</span>
      </li>
    ));

    return (
      <div className="miniTodoContainer">
        <h2 className="miniTodoTitle">{title}</h2>
        <ul className="miniTodoList">{todosList}</ul>
      </div>
    );
  }
}

MiniTodo.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default MiniTodo;
