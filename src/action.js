import { CREATE_LIST, DELETE_LIST, TOGGLE_NEW_LIST_MODAL } from './constants';

export const addList = (list) => {
  return {
    type: CREATE_LIST,
    list,
  };
};

export const deleteList = (list) => {
  return {
    type: DELETE_LIST,
    list,
  };
};

export const toggleNewListModal = (status) => {
  return {
    type: TOGGLE_NEW_LIST_MODAL,
    status,
  };
};
