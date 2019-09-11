import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { scaleSize } from '../../Utils/ScreenUtil';

class Mine extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'blue'}}>
        <Text>聊天</Text>
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
  },
});

export default Mine;
