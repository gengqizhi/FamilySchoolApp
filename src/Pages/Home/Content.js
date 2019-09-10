'use strict';
import React, { Component } from 'react';
import {
  BackAndroid,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Dimensions,
    StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';
// import Ad from './Ad';
// import Brand from './Brand';
// import CookieManager from 'react-native-cookies';
const Config = require('../../Utils/Config');
const base64 = require('../../Utils/Base64');
const localStorage = require('../../Utils/LocalStorage');
const screenWidth = Dimensions.get('window').width;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  onButtonPress(){
    // alert('onPress')
  }
  _rowPressed(propertyGuid, rowID){
    // var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[rowID];
    this.props.navigator.push({
      title: "Property",
      component: ProductDetail,
    });
  };
  render() {
    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
          {/*<Swiper*/}
            {/*style={styles.wrapper}*/}
            {/*showsButtons={false}*/}
            {/*autoplay={true}*/}
            {/*paginationStyle={{bottom:8}}*/}
            {/*height={306/824*screenWidth}*/}
          {/*>*/}
            {/*<Image style={styles.slide} source={require('../../Assets/Image/banner.jpg')} />*/}
            {/*<Image style={styles.slide} source={require('../../Assets/Image/banner.jpg')} />*/}
            {/*<Image style={styles.slide} source={require('../../Assets/Image/banner.jpg')} />*/}
          {/*</Swiper>*/}
          <View style={styles.main}>
            <View style={{padding:3,marginTop:10,}}>
              <View style={{flexDirection:'row',marginBottom:10,width:screenWidth -6}}>
                <TextInput
                  underlineColorAndroid='transparent'
                  autoCapitalize="none"
                  placeholder="请输入关键字"
                  autoCorrect={false}
                  style={{paddingLeft:50, height:Platform.OS === 'ios' ? 32 : 37,fontSize:14, width:screenWidth -6,  borderColor:'#fdbb30', borderWidth:1, flexDirection:'row', }}
                />
                <View style={{height:31, flexDirection:'row', position:'absolute',right:0}}>
                  <TouchableHighlight
                    onPress={this.onButtonPress}
                    style={{backgroundColor:"#fdbb30", padding:4,}}>
                    <Text style={{color:"#000",padding:4,}}>
                      搜索
                    </Text>
                  </TouchableHighlight>
                </View>
                <View style={{height:31, flexDirection:'row',position:'absolute', left:0}}>
                  <TouchableHighlight
                    onPress={this.onButtonPress}
                    style={{backgroundColor:"#f1f1f1", padding:4,marginTop:1,marginLeft:1}}>
                    <Text style={{color:"#000",padding:4}}>
                      产品
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            {/*<View style={{padding:3}}>*/}
              {/*<Ad/>*/}
            {/*</View>*/}
            {/*<View style={{flex:1,padding:3}}>*/}
              {/*<Text style={{marginTop:13,marginBottom:10}}>*/}
                {/*大牌盛宴*/}
              {/*</Text>*/}
              {/*<View>*/}
                {/*<Brand/>*/}
              {/*</View>*/}
            {/*</View>*/}

            {/*<View style={{flex:1,padding:3}}>*/}

              {/*<View style={{flexDirection: 'row',marginTop:10,marginBottom:10}}>*/}
                {/*<Image source={require('../../Assets/Image/yf_03.jpg')} />*/}
                {/*<Text style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:7,paddingLeft:10}}>*/}
                  {/*潮流时尚馆*/}
                {/*</Text>*/}
              {/*</View>*/}

              {/*<View style={{flexDirection: 'row'}}>*/}
                {/*<Image style={styles.slideImg} source={require('../../Assets/Image/bd_06.jpg')} />*/}
                {/*<Image style={styles.slideImg} source={require('../../Assets/Image/bdd_03.jpg')} />*/}
                {/*<Image style={styles.slideImg} source={require('../../Assets/Image/bd_25.jpg')} />*/}
              {/*</View>*/}
              {/*<View style={{flexDirection: 'row',marginTop:3}}>*/}
                {/*<Image style={styles.slideImg} source={require('../../Assets/Image/bd_13.jpg')} />*/}
                {/*<Image style={styles.slideImg} source={require('../../Assets/Image/bd_16.jpg')} />*/}
                {/*<Image style={styles.slideImg} source={require('../../Assets/Image/bd_22.jpg')} />*/}
              {/*</View>*/}
            {/*</View>*/}

            {/*<View style={{flex:1,padding:3}}>*/}
              {/*<View style={{flexDirection: 'row',marginTop:10,marginBottom:10}}>*/}
                {/*<Image source={require('../../Assets/Image/lan_33.jpg')} />*/}
                {/*<Text style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:5,paddingLeft:10}}>*/}
                  {/*电器数码馆*/}
                {/*</Text>*/}
              {/*</View>*/}
              {/*<View>*/}
                {/*<Swiper*/}
                  {/*style={styles.wrapper}*/}
                  {/*showsButtons={false}*/}
                  {/*autoplay={true}*/}
                  {/*paginationStyle={{bottom:8}}*/}
                  {/*height={282/527*screenWidth}*/}
                {/*>*/}
                  {/*<Image style={styles.slide1} source={require('../../Assets/Image/lan_38.jpg')} />*/}
                  {/*<Image style={styles.slide1} source={require('../../Assets/Image/lan_38.jpg')} />*/}
                  {/*<Image style={styles.slide1} source={require('../../Assets/Image/lan_38.jpg')} />*/}
                {/*</Swiper>*/}
                {/*<View style={{flexDirection: 'row',marginTop:10,marginBottom:60}}>*/}
                  {/*<Image style={styles.footerImg} source={require('../../Assets/Image/footer_06.jpg')} />*/}
                  {/*<Image style={styles.footerImg} source={require('../../Assets/Image/footer_08.jpg')} />*/}
                  {/*<Image style={styles.footerImg}  source={require('../../Assets/Image/footer_11.jpg')} />*/}
                {/*</View>*/}
              {/*</View>*/}
            {/*</View>*/}
          </View>
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  iconStyle:{
    width:26,
    height:26,
  },
  priceView:{
    flexDirection:'row',
  },
  priceTextSpecial:{
    color:'#FF8A01',
    fontSize:16,
  },
  priceText:{
    color:'#9b9a9a',
    lineHeight:22,
    textDecorationLine:'line-through'
  },
  pricePeoplePay:{
    color:'#9b9a9a',
    lineHeight:22,
  },
  listRowProductInfo:{
    flex:2,
    height:100,
    padding:5,
    paddingLeft:10,
  },
  listRowProduct2:{
      flex:3,
  },
  listRowProduct:{
    justifyContent:'center',
    flexDirection:'row',
    padding:5},
  textStyle:{
    color:'#999',
  },
  selectedTextStyle:{
    color:'black',
  },
  container: {
    flex:1,
    flexDirection:'row',
    paddingTop:30,
 
  },
  circleContainer: {
    position:'absolute',
    left:0,
    top:120,
  },
  circle: {
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'#f4797e',
    marginHorizontal:5,
  },

  circleSelected: {
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'#ffffff',
    marginHorizontal:5,
  },
  // wrapper: {
  //   height:123,
  //
  //  },
  paginationStyle: {
     position:'absolute',
     bottom:430,
    //flex:1,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  listContainer: {
    flex:1,
  },
  list: {
    backgroundColor: '#eeeeee',
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  rowDetailText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 20,
    height:70,
  },
  sectionHeader: {
    padding: 5,
    fontWeight: '500',
    fontSize: 11,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  search:{
    marginBottom:10,

  },
  slide:{
    height:306/824*screenWidth,
    width:screenWidth,
  },
  slide1:{
    height:282/527*screenWidth,
    width:screenWidth,
  },
  slideImg:{
      flex:1,
      height:170,
      margin:1,
      borderWidth:1,
      borderColor:'#eee',
      resizeMode: 'stretch',

  },
  footerImg:{
      flex:1,
      height:120,
      margin:1,
      borderWidth:1,
      borderColor:'#eee',
      resizeMode: 'contain',
  },
});
module.exports = Content;