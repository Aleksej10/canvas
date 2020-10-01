import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Provider} from 'react-redux';
import Game from './Game';
import { getShuffled } from './Game';
import {PersistGate} from 'redux-persist/integration/react';

const reducer = (state = 
  {
    index: 0,
    cards: getShuffled(),
    bet: 10,
    total: 90,
    outcome: '',
  }, action) => {
  switch(action.type){
    case 'reset':
      state = {
        ...state,
        index: 0,
        cards: getShuffled(),
        bet: 10,
        total: 90,
        outcome: '',
      };
      break;
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

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

store.subscribe(()=>{});


render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Game />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
