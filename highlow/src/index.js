import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedReducer from './reducers/GameReducer';
import Game from './components/Game';


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
