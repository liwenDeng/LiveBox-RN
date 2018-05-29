import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import DouyuScreen from './Douyu.js';
import QuanminScreen from './Quanmin.js';
import PandaScreen from './Panda.js';


export default HomeScreen = createMaterialTopTabNavigator(
  {
    DouyuScreen: DouyuScreen,
    QuanminScreen: QuanminScreen,
    PandaScreen: PandaScreen,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      tabStyle: {
        paddingTop: 2,
        height: 40,
        alignItems:'center',
        alignContent:'center',
        align: 'center',
      },
      indicatorStyle: {
        backgroundColor: '#1ef7c1',
        width: 40,
        alignContents: 'center'
      },
    },
  }
);
