
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';
 export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  ReadScreen:{screen:ReadStory},
  WriteScreen:{screen:WriteStory}
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
