import React from 'react';
import { View, Text } from 'react-native';

export default class PandaScreen extends React.Component {
  static navigationOptions = {
    title: '熊猫TV',
  };
  render() {
    return (
      <View>
        <Text>Panda</Text>
      </View>
    );
  }
}