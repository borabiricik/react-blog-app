import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import App from "./Components/App"
import reportWebVitals from './reportWebVitals';
import "./Components/styles/main.scss"
import configureStore from "./store/configureStore"
import {addBlog} from "./actions/blogs"
import "./firebase/firebaseConfig"

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// })

store.dispatch(addBlog({ title: "blog title 1", description: "blog desc 1", dateAdded: 1 }))
store.dispatch(addBlog({ title: "blog title 2", description: "blog desc 2", dateAdded: 2 }))





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
