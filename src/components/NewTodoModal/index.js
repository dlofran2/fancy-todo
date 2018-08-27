import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import NewListForm from 'components/NewListForm';

import styles from './NewTodoModal.scss';

class NewTodoModal extends Component {
  toggleNewListModal = () => {
    this.props.onToggleNewListModal(false);
  };

  addList = values => {
    const { lists } = this.props;
    if (values && values.newListTitle) {
      let id = 1;
      if (lists && lists.length > 0) {
        id = lists[lists.length - 1].id + 1;
      }

      this.props.onAddList({
        id,
        title: values.newListTitle,
        todos: [],
      });

      this.toggleNewListModal();
    }
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
            minHeight: '160px',
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
          <div className={styles.newTodoListForm}>
            <NewListForm onSubmit={this.addList} onCancel={this.toggleNewListModal} />
          </div>
        </div>
      </ReactModal>
    );
  }
}

NewTodoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleNewListModal: PropTypes.func.isRequired,
  onAddList: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

export default NewTodoModal;
