import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import RouteTitle from 'components/RouteTitle';
import AddButton from 'components/AddButton';
import MiniTodoContainer from 'containers/MiniTodoContainer';
import NavBar from 'components/NavBar';
import NewTodoModal from 'components/NewTodoModal';

import { CREATE_LIST, TOGGLE_NEW_LIST_MODAL } from '../../constants';

import styles from './TaskListContainer.scss';

class TaskListContainer extends Component {
  toggleNewListModal = () => {
    this.props.onToggleNewListModal(true);
  };

  render() {
    return (
      <section className={styles.gridParent}>
        <div className={styles.logoGridChild}>
          <Logo />
        </div>
        <div className={styles.routeTitleGridChild}>
          <RouteTitle title={'Tasks Lists'} />
        </div>
        <div className={styles.addButtonGridChild}>
          <AddButton
            text={'Add List'}
            onButtonClick={this.toggleNewListModal}
          />
        </div>
        <div className={styles.miniTodoContainerGridChild}>
          <MiniTodoContainer />
        </div>
        <div className={styles.navBarGridChild}>
          <NavBar />
        </div>
        <NewTodoModal
          isOpen={this.props.newListModalStatus}
          onToggleNewListModal={this.props.onToggleNewListModal}
          onAddList={this.props.addList}
        />
      </section>
    );
  }
}

TaskListContainer.propTypes = {
  addList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newListModalStatus: state.newListModal,
});

const mapDispatchToProps = (dispatch) => ({
  addList: (list) => dispatch({ type: CREATE_LIST, list }),
  onToggleNewListModal: (status) =>
    dispatch({ type: TOGGLE_NEW_LIST_MODAL, status }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskListContainer);
