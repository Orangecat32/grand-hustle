import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'


import * as rappers from './rappers';

import reducer from "../reducers";

export const initialState = {
    rappers: rappers.init()
  };

export const buildStore = () => {
  let middleware = [thunk];

  // turn off the noise here
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }

  return createStore(reducer,  applyMiddleware(...middleware));
}