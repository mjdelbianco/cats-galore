import React from 'react';
import {StatusBar} from 'react-native';
import CatList from './CatList';
import TopBar from './TopBar';
//TODO add navigation to cat detail
//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import catReducer from './redux/reducer';
//TODO redux persist
//TODO async storage

const store = createStore(catReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <TopBar />
      <CatList />
    </Provider>
  );
};

export default App;
