import React, {Component} from "react";
import {
  DeviceEventEmitter,
  Platform
} from 'react-native';
import {
  init, // 初始化 SDK，只需要调用一次
  addLogInfoListener, // 添加日志信息监听函数
  addRecallMessageListener, // 添加消息撤回监听函数
  syncConversationReadStatus, // 同步会话阅读状态
  setDeviceToken, // 设置 deviceToken，用于远程推送 TODO
  setServerInfo, // 设置导航服务器和上传文件服务器信息，要在 [[init]] 前使用
  setStatisticServer, // 设置统计服务地址
  connect, // 连接融云服务器，只需要调用一次
  disconnect, // 断开与融云服务器的连接
  getConnectionStatus, // 获取当前连接状态 TODO
  addReceiveMessageListener, // 添加消息监听函数
  sendMessage, // 发送消息
  sendMediaMessage, // 发送媒体消息:文件/图片
  sendDirectionalMessage, // 发送群定向消息
  recallMessage, // 消息撤回
  sendTypingStatus, // 发送输入状态
  addTypingStatusListener, // 添加输入状态监听函数
  setMessageSentStatus, // 设置消息发送状态
  setMessageReceivedStatus, // 设置消息接收状态
  getBlockedConversationList, // 获取屏蔽消息提醒的会话列表
  sendReadReceiptMessage, // 发送阅读回执
  sendReadReceiptRequest, // 发起群组消息回执请求
  sendReadReceiptResponse, // 发起群组消息回执响应
  addReadReceiptReceivedListener, // 添加私聊阅读回执监听函数
  addReceiptRequestListener, // 添加收到消息已读回执请求监听函数
  addReceiptResponseListener, // 添加消息回执响应监听函数
  cancelSendMediaMessage, // 取消发送中的媒体消息
  cancelDownloadMediaMessage, // 取消下载中的媒体消息
  downloadMediaMessage, // 下载媒体消息
  addConnectionStatusListener, // 添加连接状态监听函数
  setReconnectKickEnable, // 设置断线重连时是否踢出重连设备
  getHistoryMessages, // 获取本地消息历史
  insertOutgoingMessage, // 向本地会话插入一条发送消息
  insertIncomingMessage, // 向本地会话插入一条接收消息
  clearMessages, // 清空某一会话的所有消息
  deleteMessages, // 删除消息
  searchConversations, // 根据关键字搜索会话
  searchMessages, // 搜索消息
  getMessage, // 获取消息
  getMessageByUId, // 根据消息 UID 获取消息
  setMessageExtra, // 设置消息的附加信息
  getMessageSendTime, // 获取消息发送时间
  getMessageCount, // 获取会话中的消息数量
  getFirstUnreadMessage, // 获取会话里第一条未读消息
  getUnreadMentionedMessages, // 获取会话中 @ 提醒自己的消息
  getRemoteHistoryMessages, // 获取服务端历史消息
  cleanRemoteHistoryMessages, // 清除服务端历史消息
  cleanHistoryMessages, // 清除本地历史消息
  deleteRemoteMessages, // 删除服务端消息
  getConversation, // 获取会话
  getConversationList, // 获取会话列表
  removeConversation, // 从会话列表中移除某一会话，但是不删除会话内的消息
  setConversationNotificationStatus, // 设置会话消息提醒状态
  getConversationNotificationStatus, // 获取会话消息提醒状态
  setConversationToTop, // 设置是否置顶会话
  getTopConversationList, // 获取置顶会话列表
  saveTextMessageDraft, // 保存某一会话的文本消息草稿
  getTextMessageDraft, // 获取某一会话的文本消息草稿
  clearTextMessageDraft, // 清除某一会话的文本消息草稿
  getTotalUnreadCount, // 获取所有未读消息数
  getUnreadCount, // 获取未读消息数
  clearMessagesUnreadStatus, // 清除某个会话中的未读消息数
  addToBlacklist, // 把用户加入黑名单
  removeFromBlacklist, // 把用户从黑名单种移除
  getBlacklistStatus, // 获取某用户是否在黑名单中
  getBlacklist, // 获取黑名单列表
  startRealTimeLocation, // 发起实时位置共享
  setNotificationQuietHours, // 全局屏蔽某个时间段的消息提醒:0 < spanMinutes < 1440
  getNotificationQuietHours, // 查询已设置的全局时间段消息提醒屏蔽
  removeNotificationQuietHours, // 删除已设置的全局时间段消息提醒屏蔽
  getOfflineMessageDuration, // 获取离线消息在服务端的存储时间
  setOfflineMessageDuration, // 设置离线消息在服务端的存储时间（以天为单位）
  getCurrentUserId, // 获取当前用户 ID
  setPushLanguage, // 设置推送语言
  setPushContentShowStatus, // 设置是否显示内容详情
  getPushContentShowStatus, // 查询是否显示内容详情
  addPushArrivedListener, // 添加推送消息到达监听函数
  ErrorCode,  // 错误码
  ObjectName, // 消息类型
  ConversationType, // 会话类型
  MentionedType, // 消息提醒类型:提醒所有-->ALL, 部分提醒-->PART
} from "rongcloud-react-native-imlib";
import {WToast} from 'react-native-smart-tip';
import Config from '../../Utils/Config';
import sha256 from 'crypto-js/sha256';

init(Config.RONG_CLOUD_APP_KEY);

// TODO 录音组件

//  模拟头像用
const Avatar = [
  require('../../Assets/Image/avatar/avatar1.jpg'),
  require('../../Assets/Image/avatar/avatar2.jpg'),
  require('../../Assets/Image/avatar/avatar3.jpg'),
  require('../../Assets/Image/avatar/avatar4.jpg'),
  require('../../Assets/Image/avatar/avatar5.jpg'),
  require('../../Assets/Image/avatar/avatar6.jpg'),
  require('../../Assets/Image/avatar/avatar7.jpg'),
  require('../../Assets/Image/avatar/avatar8.jpg'),
  require('../../Assets/Image/avatar/avatar9.jpg'),
  require('../../Assets/Image/avatar/avatar10.jpg'),
  require('../../Assets/Image/avatar/avatar11.jpg'),
  require('../../Assets/Image/avatar/avatar12.jpg'),
  require('../../Assets/Image/avatar/avatar13.jpg'),
  require('../../Assets/Image/avatar/avatar14.jpg'),
  require('../../Assets/Image/avatar/avatar15.jpg'),
  require('../../Assets/Image/avatar/avatar16.jpg'),
];

class Im extends Component {
  // 连接融云
  connect() {
    let token = 'i6+b2+pu5CLGBqsc+gEr3nUtniGjze2mQ32/rOJ3M5vT/qyU5loF8yLRSV0q8Bf2lwy7lZZId8ndiVfJNFSrRg=='; // test1
    if (Platform.OS == 'ios') {
      token = 'I4uCufnns74PgqWm2A05+5pQZ0/RIYLiS8aILqZ41QcRTqm1SnQ+BwAKrwKBrKzGWbFql+4p38Sssw6nhY6I2Q==' // test2
    }
    disconnect();// TODO 为了登录成功, 获取头像, 正式删除
    return new Promise(res => {
      connect(
        token,
        userId => {
          res({
            id: userId,
            avatar: this.getAvatar(userId)
          });
          // 添加新消息监听
          this.onMessage();
          WToast.show({data: '登录成功!', position: WToast.position.CENTER});
        },
        errorCode => {
          if (errorCode != 34001) {
            WToast.show({data: errorCode, position: WToast.position.CENTER});
          } else {
            this.onMessage();
            WToast.show({data: '已连接', position: WToast.position.CENTER});
          }
        },
        () => {
          WToast.show({data: 'Token不正确或已过期/正式删除', position: WToast.position.CENTER});
        }
      );
    });
  }

  getAvatar(id = ''){
    // 模拟头像
    let a = sha256(id).words[1] + '';
    let b = '';
    for (let i = 0; i < a.length; i++) {
      if (a[i] > 0) {
        b = b + a[i];
        if(b.length > 1)break;
      }
    }
    if(b>16){
      b = parseInt(b/7);
    }
    return Avatar[b];
  }

  // 发送消息
  send(msg) {
    let message = {
      conversationType: msg.type === 1 ? ConversationType.PRIVATE : ConversationType.GROUP, // 单聊/群聊
      targetId: msg.targetId, // 接收人bfCode
      content: {
        objectName: ObjectName.Text,
        content: msg.msg
      }
    };
    sendMessage(message, {
        success: (messageId) => {
          WToast.show({data: '发送成功!', position: WToast.position.CENTER});
        },
        error: (errorCode, messageId, errorMessage) => {
          WToast.show({data: '发送失败!', position: WToast.position.CENTER});
        }
      }
    );
  }

  // 收到新消息监听
  onMessage() {
    addReceiveMessageListener(message => {
      // { message:
      // { targetId: 'test1',
      //   senderUserId: 'test1',
      //   objectName: 'RC:TxtMsg',
      //   receivedStatus: 0,
      //   sentTime: 1568469231535,
      //   messageDirection: 2,
      //   conversationType: 1,
      //   receivedTime: 1568469231546,
      //   messageId: 3,
      //   extra: '',
      //   messageUId: 'BD60-6IFB-QI25-4JF0',
      //   content: { content: '123', objectName: 'RC:TxtMsg', extra: '' } },
      //   left: 0 }
      DeviceEventEmitter.emit('onMessage', message);
    });
  }

}

module.exports = new Im();
