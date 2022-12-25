import { combineReducers } from "redux";
import subscriberReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducers from "./comments/reducer";

const rootReducer = combineReducers({
  views: viewsReducer,
  subscribers: subscriberReducer,
  comments: commentsReducers,
});

export default rootReducer;
