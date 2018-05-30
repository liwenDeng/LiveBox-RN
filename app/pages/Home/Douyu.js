import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';
import RoomItemCell from '../../components/RoomItemCell.js';

export default class DouyuScreen extends React.Component {
  static navigationOptions = {
    title: '斗鱼TV',
  };

  _onPressItem = (roomItem) => {
    alert(roomItem.name);
  };

  _renderItem = ({item}) => {
    return (
      <RoomItemCell
        onPressItem={this._onPressItem}
        roomItem={item}
      />
    );
  };

  _renderSectionHeader= ({section}) => {
    return  (<Text style={{ color: 'green' }}>{section.title}</Text>);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SuperGridSectionList
          sections={[
            {
              title: 'Title1',
              data: [
                { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
                { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
                { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
                { name: 'NEPHRITIS', code: '#27ae60' },
              ]
            },
            {
              title: 'Title2',
              data: [
                { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
                { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
                { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
              ]
            },
            {
              title: 'Title3',
              data: [
                { name: 'BELIZE HOLE', code: '#2980b9' }, { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
                { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
                { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' }
              ]
            }
          ]}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          stickySectionHeadersEnabled={false}
          spacing={5}
        />
      </View>
    );
  }
}
