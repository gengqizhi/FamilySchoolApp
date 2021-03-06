import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { scaleSize } from '../../Utils/ScreenUtil';
import icon from '../../Assets/Image/mine.png';

class Mine extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={icon}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'blue'}}>
        <View style={styles.wrapper}>
          <Text>建议</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: scaleSize(40),
    height: scaleSize(40),
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
});

export default Mine;
