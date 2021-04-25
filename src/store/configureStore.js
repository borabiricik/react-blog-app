import { createStore, combineReducers } from "redux"
import blogsReducer from "../reducers/blogs"
import authReducer from "../reducers/auth"

const configureStore = () =>{
    const store = createStore(
        combineReducers({
            blogs: blogsReducer,
            auth: authReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

export default configureStore;
