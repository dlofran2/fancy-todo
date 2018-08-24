import { CREATE_LIST, DELETE_LIST, TOGGLE_NEW_LIST_MODAL } from './constants';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  lists: [],
  newListModal: false,
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

// Until the state/reducers become more complicated, leaving combine reducers here is fine
const rootReducer = combineReducers({
  app: reducer,
  form: formReducer,
});

export default rootReducer;
