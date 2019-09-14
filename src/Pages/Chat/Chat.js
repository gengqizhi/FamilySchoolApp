import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView
} from 'react-native';
import {connect} from 'react-redux';
import {GiftedChat} from '../../Utils/GiftedChat'
import IM from './Im';

@connect(state => ({...(state.Home)}))
class Chat extends Component {

  constructor(props) {
    super(props);
    IM.connect().then(user => {
      this.props.dispatch({type: 'Home/Set', msg: {user}});
    });
    this.listener = DeviceEventEmitter.addListener('onMessage', this._onMsg);
  }

  componentWillUnmount() {
    this.listener && this.listener.remove();
  }

  _onMsg = (msg = []) => {
    const messages =
      [{
        text: msg.message.content.content,
        user: {_id: msg.message.senderUserId},
        createdAt: new Date(msg.message.sentTime),
        _id: msg.message.senderUserId
      }];
    const dispatchMsg = {messages: GiftedChat.append(this.props.messages, messages)};
    this.props.dispatch({type: 'Home/Set', msg: dispatchMsg});
  };

  onSend(messages = []) {
    IM.send({
      type: 1, // 单聊/群聊
      targetId: Platform.OS === 'ios' ? 'test1' : 'test2', // 接收人bfCode
      msg: messages[0].text
    });
    const dispatchMsg = {messages: GiftedChat.append(this.props.messages, messages)};
    this.props.dispatch({type: 'Home/Set', msg: dispatchMsg});
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={{flex: 1, backgroundColor: '#eee'}}>
          <GiftedChat
            messages={this.props.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: this.props.user ? this.props.user.id : '0',
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Chat;
