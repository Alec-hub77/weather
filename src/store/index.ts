import alertReducer from "./reducers/alertReducer";
import weatherReducer from "./reducers/weatherReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
