import { createStore } from "redux";
import subscriberReducer from "./subscribers/reducer";
const store = createStore(subscriberReducer);

export default store;
