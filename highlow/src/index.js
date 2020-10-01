import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Game from './Game';
import { getShuffled } from './Game';

const reducer = (state = 
  {
    index: 0,
    cards: getShuffled(),
    bet: 10,
    total: 90,
    outcome: '',
  }, action) => {
  switch(action.type){
    case 'decBet':
      if(state.bet <= 10) break;
      state = {
        ...state,
        bet: state.bet + 5,
        total: state.total - 5,
      }; 
      break;
    case 'incBet':
      const inc = state.total < 5 ? state.total : 5;
      state = {
        ...state,
        bet: state.bet + inc,
        total: state.total - inc,
      }; 
      break;
    case 'setGlow':
      state = {
        ...state,
        index: state.index + 1,
        outcome: action.outcome ? 'green-glow' : 'red-glow',
      }; 
      break;
    case 'updateBank':
      if(action.outcome){
        state = {
          ...state,
          total: state.total + state.bet,
        }; 
      }
      else{
        var bet = state.bet;
        var total = state.total;
        if(total >= 2*bet){
          total -= bet;
        }
        else if(total < 10){
          console.log('minimum bet is 10');
          bet = 0;
        }
        else{
          total -= 10;
          bet = 10;
        }
        state = {
          ...state,
          index: 0,
          cards: getShuffled(),
          outcome: '',
          bet: bet,
          total: total,
        }; 
      }
      break;
    default: ;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(()=>{});


render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
