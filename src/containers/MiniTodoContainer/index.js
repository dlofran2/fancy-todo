import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MiniTodoWrapper from '../../components/MiniTodoWrapper';

import styles from './MiniTodoContainer.scss';

class MiniTodoContainer extends Component {
  render() {
    const { lists } = this.props;
    const todos = lists.map((list, idx) => {
      return (
        <MiniTodoWrapper
          key={idx}
          title={list.title}
          todos={list.todos}
          id={list.id}
        />
      );
    });

    return <div className={styles.miniTodoContainerContainer}>{todos}</div>;
  }
}

MiniTodoContainer.propTypes = {
  lists: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    lists: state.app.lists,
  };
};

export default connect(
  mapStateToProps,
  null,
)(MiniTodoContainer);
