import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { scaleSize } from '../../Utils/ScreenUtil';
import { GiftedChat } from '../../Utils/GiftedChat'
import IM from './Im';

@connect(state => ({...(state.Home)}))
class Chat extends Component {

  onSend(messages = []) {
    IM.connect();
    const dispatchMsg = {messages: GiftedChat.append(this.props.messages, messages)};
    this.props.dispatch({type: 'Home/Set', msg: dispatchMsg});
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'blue'}}>
        <View style={{flex: 1, backgroundColor:'#eee'}}>
          <GiftedChat
            messages={this.props.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
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
  },
});

export default Chat;
