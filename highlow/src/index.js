import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Game } from './Game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
