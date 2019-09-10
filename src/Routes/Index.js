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
        navigationOptions: {
          header:null,
          tabBarLabel: "通知",
          gesturesEnabled: true,
          //这里设置Tabbar不同页面可能会不同的属性
          tabBarVisible: true,
          // tabBarIcon: ({ tintColor, focused }) => {
          //     return (
          //         <Image
          //             source={
          //                 focused
          //                     ? require("../static/img/1.png")
          //                     : require("../static/img/2.png")
          //             }
          //             style={styles.tabbarImage}
          //             resizeMode='contain'
          //         />
          //     );
          // },
          tabBarOnPress: ({ navigation, defaultHandler }) => {
              defaultHandler();
          }
        },
      },
      Class: {
        screen: Mine,
        navigationOptions: {
            header:null,
            tabBarLabel: "班级",
            gesturesEnabled: true,
            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            // tabBarIcon: ({ tintColor, focused }) => {
            //     return (
            //         <Image
            //             source={
            //                 focused
            //                     ? require("../static/img/1.png")
            //                     : require("../static/img/2.png")
            //             }
            //             style={styles.tabbarImage}
            //             resizeMode='contain'
            //         />
            //     );
            // },
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                defaultHandler();
            }
        },
      },
      Chat: {
        screen: Mine,
        navigationOptions: {
            header:null,
            tabBarLabel: "聊天",
            gesturesEnabled: true,
            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            // tabBarIcon: ({ tintColor, focused }) => {
            //     return (
            //         <Image
            //             source={
            //                 focused
            //                     ? require("../static/img/1.png")
            //                     : require("../static/img/2.png")
            //             }
            //             style={styles.tabbarImage}
            //             resizeMode='contain'
            //         />
            //     );
            // },
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                defaultHandler();
            }
        },
      },
      Me: {
        screen: Mine,
        navigationOptions: {
            header:null,
            tabBarLabel: "我",
            gesturesEnabled: true,
            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            // tabBarIcon: ({ tintColor, focused }) => {
            //     return (
            //         <Image
            //             source={
            //                 focused
            //                     ? require("../static/img/1.png")
            //                     : require("../static/img/2.png")
            //             }
            //             style={styles.tabbarImage}
            //             resizeMode='contain'
            //         />
            //     );
            // },
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                defaultHandler();
            }
        },
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

