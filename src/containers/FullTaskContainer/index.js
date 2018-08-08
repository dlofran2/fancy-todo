import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './FullTaskContainer.scss';

import Logo from '../../components/Logo';
import Close from '../../components/Close';
import FullTaskTitle from '../../components/FullTaskTitle';
import FullTodo from '../../components/FullTodo';
import AddButton from '../../components/AddButton';
import TinyTodoWrapper from '../../components/TinyTodoWrapper';

class FullTaskContainer extends Component {
  render() {
    return (
      <section className={styles.gridParent}>
        <div className={styles.logoGridChild}>
          <Logo />
        </div>
        <div className={styles.closeGridChild}>
          <Close />
        </div>
        <div className={styles.titleGridChild}>
          <FullTaskTitle title={'Trip to YYC'} currentList={2} totalList={7} />
        </div>
        <div className={styles.todoContainer}>
          <FullTodo />
        </div>
        <div className={styles.addContainer}>
          <AddButton />
        </div>
        <div className={styles.tinyTodoContainer}>
          <TinyTodoWrapper />
        </div>
      </section>
    );
  }
}

FullTaskContainer.propTypes = {};

export default FullTaskContainer;
