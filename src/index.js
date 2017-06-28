import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import RootReducer from './reducers';
import App from './containers/App';

const store = createStore(RootReducer, applyMiddleware(logger));
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
