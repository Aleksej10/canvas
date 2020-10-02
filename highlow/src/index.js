import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Provider} from 'react-redux';
import Game from './Game';
import { getShuffled, log_msg } from './Game';
import {PersistGate} from 'redux-persist/integration/react';

const reducer = (state = 
  {
    index: -1,
    bet: 10,
    total: 90,
    outcome: '',
    guesses: [],
  }, action) => {
  switch(action.type){
    case 'reset': {
      state = {
        ...state,
        index: -1,
        cards: getShuffled(),
        bet: 10,
        total: 90,
        outcome: '',
        inGameMoney: 0,
        guesses: [],
      };
      break;
    }
    case 'collect': {
      if(state.inGameMoney === 0){
        log_msg('you have nothing to collect!', 'red');
        break;
      }
      const total = state.total + state.inGameMoney;
      state = {
        ...state,
        total: total,
        inGameMoney: 0,
      };
      break;
    }
    case 'doubleBet': {
      state = {
        ...state,
        inGameMoney: state.inGameMoney * 2,
      };
      break;
    }
    case 'newGame': {
      const inGameMoney = state.bet;
      if(inGameMoney === 0){
        log_msg('minimum bet is 5', 'orange');
        break;
      }
      state = {
        ...state,
        index: 0,
        cards: getShuffled(),
        inGameMoney: inGameMoney,
        outcome: '',
        bet: 0,
        guesses: [],
      };
      break;
    }
    case 'decBet': {
      if(state.bet <= 10) break;
      state = {
        ...state,
        bet: state.bet + 5,
        total: state.total - 5,
      }; 
      break;
    }
    case 'incBet': {
      const inc = state.total < 5 ? state.total : 5;
      state = {
        ...state,
        bet: state.bet + inc,
        total: state.total - inc,
      }; 
      break;
    }
    case 'setGlow': {
      state = {
        ...state,
        index: state.index + 1,
        outcome: action.outcome ? 'green-glow' : 'red-glow',
        guesses: state.guesses.concat([action.guess]),
      }; 
      break;
    }
    case 'updateBank': {
      if(action.outcome){
        state = {
          ...state,
          inGameMoney: state.inGameMoney * 2,
        }; 
      }
      else{
        state = {
          ...state,
          inGameMoney: 0,
        }; 
        log_msg('you lost this round', 'grey');
      }
      break;
    }
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
