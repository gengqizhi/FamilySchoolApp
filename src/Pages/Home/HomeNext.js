import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { connect } from '../../Utils/Dva';
import { scaleSize } from '../../Utils/ScreenUtil';

class HomeNext extends Component {
  static navigationOptions={
    title: '下一页',
  }
  
  render() {
          // <TouchableOpacity
          //   onPress={()=>{alert(0)}}
          //   activeOpacity={0.7}
          //   style={styles.button}
          // >
          //   <Text>{'<'}</Text>
          // </TouchableOpacity>
    const { navigation } = this.props;
    const { name } = navigation.state.params
    return (
      <View style={styles.wrapper}>
        <View style={{justifyContent: 'center',height:'100%'}}>
          <Text>{name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop:25,
    paddingLeft: 25,
    width:'100%',
    alignItems: 'flex-start',
  },
});


export default HomeNext;
