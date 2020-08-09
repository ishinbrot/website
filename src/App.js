import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import auth from './store/reducers/auth'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: auth,
});

const store = createStore(rootReducer);

const App = (props) => {

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App;
