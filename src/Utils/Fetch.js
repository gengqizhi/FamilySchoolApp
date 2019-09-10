'use strict';
var base64 = require('./base64');
var Config = require('./api');
// var CookieManager = require('react-native-cookies');
var localStorage = require('./LocalStorage');
async function _fetch(url, parameter){
  // localStorage.removeCsrf();
  var data;
  var csrf = await localStorage.getCsrf();
  data = {csrf: csrf};
  for(var key in parameter){
    data[key] = parameter[key];
  }
  console.log('data:', data);
  return fetch(
    url,
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authentication': 'Digest '+ rsaStr   //get put delete
      },
      body: JSON.stringify(data)
    },
  ).then(response => response.text());
}
// function _getCsrf() {
//   CookieManager.get(Config.DEFAULT_HOST, (err, res) => {
//     console.log('res.PHPSESSID:', res.PHPSESSID);
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = (e) => {
//       if (request.readyState !== 4) {
//         return;
//       }
//       if (request.status === 200) {
//         console.log('request.responseText:', request.responseText);
//         localStorage.setCsrf(request.responseText);
//       } else {
//         console.warn('getCsrf-requestWarn:', e);
//       }
//     };
//     request.open('GET', `${Config.DEFAULT_HOST}api/rest/`);
//     request.setRequestHeader('Authorization','Csrf ' + base64(res.PHPSESSID));
//     request.send();
//   });
// }
module.exports = _fetch;
