import React from 'react';
import {StatusBar} from 'react-native';
import CatList from './Screens/CatList';
import TopBar from './Components/TopBar';
import CatDetail from './Screens/CatDetail';

//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import catReducer from './redux/reducer';

//redux persist
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

//async storage
import AsyncStorage from '@react-native-community/async-storage';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const persistConfig = {
  key: 'secretKey',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, catReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <TopBar />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: {
                backgroundColor: 'white',
              },
            }}>
            <Stack.Screen name="Home" component={CatList} />
            <Stack.Screen name="Detail" component={CatDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
