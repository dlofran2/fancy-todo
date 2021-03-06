import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './FullTaskContainer.scss';

import Logo from 'components/Logo';
import Close from 'components/Close';
import FullTaskTitle from 'components/FullTaskTitle';
import FullTodo from 'components/FullTodo';
import AddButton from 'components/AddButton';
import TinyTodoWrapper from 'components/TinyTodoWrapper';

class FullTaskContainer extends Component {
  addNewList = () => {
    console.log('adding new item to active list');
  };

  render() {
    const { lists } = this.props;
    const currentList = parseInt(this.props.match.params.id, 10);

    if (lists.length === 0) {
      this.props.history.push('/');
      return null;
    }

    return (
      <section className={styles.gridParent}>
        <div className={styles.logoGridChild}>
          <Logo />
        </div>
        <div className={styles.closeGridChild}>
          <Close />
        </div>
        <div className={styles.titleGridChild}>
          <FullTaskTitle
            title={lists[currentList - 1].title}
            currentList={currentList}
            totalList={lists.length}
          />
        </div>
        <div className={styles.todoContainer}>
          <FullTodo todos={lists[currentList - 1].todos} />
        </div>
        <div className={styles.addAndTinyTodoContainer}>
          <div className={styles.addContainer}>
            <AddButton onButtonClick={this.addNewList} />
          </div>
          <div className={styles.tinyTodoContainer}>
            <TinyTodoWrapper
              lists={lists}
              currentList={currentList}
            />
          </div>
        </div>
      </section>
    );
  }
}

FullTaskContainer.propTypes = {
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
)(FullTaskContainer);
