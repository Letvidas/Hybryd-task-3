import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import showScreen from './src/screens/showScreen';
import addScreen from './src/screens/addScreen';
import deleteScreen from './src/screens/deleteScreen';
import editScreen from './src/screens/editScreen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combineReducers from './store/reducers/index';
import {addPc} from './store/actions/actions';

const Tab = createBottomTabNavigator();
const store = createStore(combineReducers);
store.dispatch(addPc('Asus', 'M3', 1));
store.dispatch(addPc('Lenovo', 'M5', 2));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRoute="showMainInformation"
            tabBarOptions={{activeTintColor: '#deaf04'}}>
            <Tab.Screen name="SHOW" component={showScreen} />
            <Tab.Screen name="ADD" component={addScreen} />
            <Tab.Screen name="DELETE" component={deleteScreen} />
            <Tab.Screen name="EDIT" component={editScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;