import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './NewTodoModal.scss';

class NewTodoModal extends Component {
  toggleNewListModal = () => {
    this.props.onToggleNewListModal(false);
  };

  addList = () => {
    this.props.onAddList({
      title: 'Test',
      todos: [
        { item: '1', status: true, date: 'Apr 2, 2018' },
        { item: '3', status: false, date: 'Apr 8, 2018' },
        { item: '2', status: true },
        { item: '4', status: false },
      ],
    });

    this.toggleNewListModal();
  };

  render() {
    const { isOpen } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: 'rgba(225, 225, 225, 0.5)',
          },
          content: {
            height: '20%',
            width: '80%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        aria={{
          labelledby: 'Add new todo list modal',
          describedby: 'Navigate to begin a new todo list',
        }}
        shouldCloseOnOverlayClick
        onRequestClose={this.toggleNewListModal}
      >
        <div className={styles.container}>
          <h2 className={classNames(styles.splitText, styles.splitTextZero)}>
            Add new{' '}
            <span className={classNames(styles.splitText, styles.splitTextOne)}>
              todo list
            </span>
          </h2>
          <div
            className={classNames(styles.splitBorder, styles.splitBorderRight)}
          />
          <form onSubmit={this.addList}>
            <label>
              <input placeholder="Todo list title" type="text" name="name" />
            </label>
            <div className={styles.buttonContainer}>
              <button className={styles.standardButton} onClick={this.toggleNewListModal}>Cancel</button>
              <button className={styles.standardButton} type="submit">Add new list</button>
            </div>
          </form>
        </div>
      </ReactModal>
    );
  }
}

NewTodoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleNewListModal: PropTypes.func.isRequired,
  onAddList: PropTypes.func.isRequired,
};

export default NewTodoModal;
