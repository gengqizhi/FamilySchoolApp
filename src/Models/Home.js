
import {
  fetchHomeName,
} from '../Services/HomeService';
// import {ListView} from 'react-native';
// const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default {
  namespace: 'Home',
  state: {
    userName: 'init username', // 名字
    isLogin: false,
    loginButtonText: '登录',
    loginFailedReason: '登录失败',
    count: 0,
    isOpen: false,
    // menuDataSource: ds.cloneWithRows([{'uri':'Garment','name':'服装城'}]),
  },
  reducers: {
    // 处理同步的action
    Set(state, {newState}) {return {...state, ...newState};}
  },
  effects: {
    // 处理异步的action    主要使用redux-saga     语法就是 es6 generator
    * Set({ msg }, { call, put, select }) { // call 调用自己定义的业务方法    put 发起action     select 选择某个namespace的state
      if(typeof msg === 'undefined' || msg === null) return;
      if(typeof msg !== 'object') msg = JSON.parse(msg);
      yield put({
        type: 'Set',
        newState: msg,
      })
    },
    * FetchHomeName({ msg }, { call, put, select }) {
      yield put({
        type: 'Set',
        newState: {userName: yield call(fetchHomeName)},
      })
    },
    * Login({ msg }, { call, put, select }) {
      const userName = yield call(fetchHomeName);
      msg.loginButtonText += ': ' + userName;
      yield put({
        type: 'Set',
        newState: {userName, ...msg},
      })
    },
  },
}