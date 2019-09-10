import React, { Component } from 'react';
import { Platform,View,StatusBar } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import { connect } from '../Utils/Dva';
import { scaleSize } from '../Utils/ScreenUtil';

import Home from '../Pages/Home/Home'; 
import Mine from '../Pages/Mine/Mine'; 

import Pages from '../Routes/RouterConfig';

class Router extends Component {

  renderTabs() {
    return createBottomTabNavigator({
      Home: {
        screen: Home,
        navigationOptions: {header:null},
      },
      Class: {
        screen: Mine,
        navigationOptions: {header: null},
      },
      Chat: {
        screen: Mine,
        navigationOptions: {header: null},
      },
      Me: {
        screen: Mine,
        navigationOptions: {header: null},
      },
    }, {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      initialRouteName: 'Home',
      backBehavior: 'none',
      lazy: true, // 懒加载
      tabBarOptions: {
        activeTintColor: '#4396ec',
        inactiveTintColor: '#b2b2b2',
        showIcon: true,
        pressColor: '#999',
        indicatorStyle: {height: 0,},
        style: {height: scaleSize(88),backgroundColor: '#fff',},
        iconStyle: {width: scaleSize(40),height: scaleSize(40),},
        labelStyle: {marginTop: scaleSize(0),fontSize: scaleSize(20),},
        // showLabel: false,
        // mode: Platform.OS === 'ios' ? 'modal' : 'card',
      }
    });
  }

  render() {
    const AppNavigator = createStackNavigator(
      {
        App: { 
          screen: this.renderTabs(),
          navigationOptions: {
            header: null, //隐藏顶部导航
            // headerStyle: {height: scaleSize(98)},
            // headerTitleStyle: {fontSize: scaleSize(36)},
          } 
        },
        ...Pages,
      },
      // {
        // navigationOptions: {
        //   gesturesEnabled: true,
        //   header: null, //隐藏顶部导航
        //   // headerStyle: {
        //   //   // elevation: 0,
        //   //   height: scaleSize(98),
        //   // },
        //   // headerTitleStyle: {
        //   //   fontSize: scaleSize(36),
        //   // },
        // },
      // },
    );
    return (
            <AppNavigator />
    );
  }
}

function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(Router);

