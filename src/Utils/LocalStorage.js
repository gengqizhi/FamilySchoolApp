/* @flow */
'use strict';

var React = require('react-native');
var {
  AsyncStorage,
} = React;



class LocalStorage {

  _tokenKey: string;
  _token: string;
  _csrfKey: string;
  _csrf: string;
  _rsa: string;
  _rsaKey: string;
  _userInfo: string;
  _userInfoKey: string;
  _usernameKey: string;

  constructor() {
    this._tokenKey = 'token';
    this._token = '';
    this._csrfKey = 'csrf';
    this._csrf = '';
    this._rsaKey = 'rsa';
    this._rsa = '';
    this._userInfoKey = 'userInfo';
    this._userInfo = '';
    this._usernameKey = 'username';
    this._hadLoggedin = 'hadLoggedin';
    console.log('用react-native-storage代替');
    // this._clear();
  }

  async _loadInitialState(key: string, initVal: any): Promise<Object> {
    if (initVal) {
      return initVal;
    } else {
      var value = await this._get(key);
      return value ? value : {};
    }
  }

  _set(key: string, value: any): Promise {
    value = JSON.stringify(value);
    return AsyncStorage.setItem(key, value);
  }

  async _get(key: string): Promise<any> {
    var value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  }


  _remove(key: string): Promise {
    return AsyncStorage.removeItem(key);
  }

  _clear(): Promise {
    return AsyncStorage.clear();
  }

  setToken(token: string): Promise {
    this._token = token;
    return this._set(this._tokenKey, token);
  }

  async getToken(): Promise<string> {
    return this._token || (this._token = await this._get(this._tokenKey));
  }

  removeToken(): Promise {
    this._token = '';
    return this._remove(this._tokenKey);
  }

  setCsrf(csrf: string): Promise {
    this._csrf = csrf;
    return this._set(this._csrfKey, csrf);
  }

  async getCsrf(): Promise<string> {
    return this._csrf || (this._csrf = await this._get(this._csrfKey));
  }

  removeCsrf(): Promise {
    this._csrf = '';
    return this._remove(this._csrfKey);
  }

  setRsa(rsa: string): Promise {
    this._rsa = rsa;
    return this._set(this._rsaKey, rsa);
  }

  async getRsa(): Promise<string> {
    return this._rsa || (this._rsa = await this._get(this._rsaKey));
  }

  removeRsa(): Promise {
    this._rsa = '';
    return this._remove(this._rsaKey);
  }
  setUserInfo(userInfo: string): Promise {
    userInfo = JSON.stringify(userInfo);
    this._userInfo = userInfo;
    return this._set(this._userInfoKey, userInfo);
  }

  async getUserInfo(): Promise<string> {
    var userInfo = this._userInfo || (this._userInfo = await this._get(this._userInfoKey));
    return userInfo ? JSON.parse(userInfo) : null;
  }

  removeUserInfo(): Promise {
    this._userInfo = '';
    return this._remove(this._userInfoKey);
  }

  getUsername(): Promise<string> {
    return this._get(this._usernameKey);
  }

  setUsername(username: string): Promise {
    return this._set(this._usernameKey, username);
  }

  shouldHideLoginPromo() : Promise {
    return this._get(this._hadLoggedin);
  }

  hideLoginPromo(): Promise {
    return this._set(this._hadLoggedin, true);
  }

}

module.exports = new LocalStorage;
