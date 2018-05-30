import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const ItemWidth = Dimensions.get('window').width / 2;
const ItemHeight = (ItemWidth * 7) / 9;

// class RoomItemCell extends React.Component {
//   _onPress = () => {
//     this.props.onPressItem(this.props.roomItem);
//   };
//
//   render() {
//     return (
//       <TouchableOpacity onPress={this._onPress} style={styles.containerItem} >
//         <Text>RoomItem</Text>
//       </TouchableOpacity>
//     );
//   }
// }

const RoomItemCell = ({roomItem, onPressItem}) => {
  return (
    <TouchableOpacity onPress={() => onPressItem(roomItem)} style={styles.containerItem} >
      <View style={styles.containerImg}>
        <Image style={styles.img} />
        <Text style={styles.nickName}> text </Text>
      </View>
      <Text> text </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: 'red',
    height: ItemHeight,
  },
  containerImg: {
    height: '80%',
    width: '100%',
  },
  img: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  nickName: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    color: '#fff',
  }
});

export default RoomItemCell;