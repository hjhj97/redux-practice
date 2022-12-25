const redux = require("redux");
const createStore = redux.createStore;

// actions
const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};

// reducer
const initialState = {
  subscribers: 365,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
