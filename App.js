import React from 'react';
import {View, Button} from 'react-native';
import {createAppContainer, withNavigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PlayerScreen from './Player';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To Player" onPress={() => this.props.navigation.push('Player')}/>
      </View>
    );
  }
}
const HomeScreen = withNavigation(Home);

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Player: {
    screen: PlayerScreen,
  },
});

export default createAppContainer(AppNavigator);
