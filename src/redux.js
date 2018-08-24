import { CREATE_LIST, DELETE_LIST, TOGGLE_NEW_LIST_MODAL } from './constants';

const initialState = {
  lists: [],
  newListModal: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST:
      return {
        ...state,
        lists: [...state.lists, action.list],
      };

    case DELETE_LIST:
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, action.list),
          ...state.lists.slice(action.list + 1),
        ],
      };

    case TOGGLE_NEW_LIST_MODAL:
      return {
        ...state,
        newListModal: action.status,
      };

    default:
      return state;
  }
}

export default reducer;
