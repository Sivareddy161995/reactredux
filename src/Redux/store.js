
import { combineReducers, createStore ,applyMiddleware} from "redux";
import laptopReducer from './Reducers/laptopReducers';
import mobileReducer from "./Reducers/mobileReducers";
import UserReducer from "./Reducers/UserReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers({
    laptops: laptopReducer,
    mobiles: mobileReducer,
    users: UserReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger));
export default store;