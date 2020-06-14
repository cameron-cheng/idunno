
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button, Left, Right, Icon, Title  } from 'native-base';
import { State } from 'react-native-gesture-handler';
// import LottieView from 'lottie-react-native'


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Footer(props) {

  return (
    <View style={style.container}>
        <View span style={style.header}>
          <Body style={style.body}>
            <Title style={style.title}>iDUNNO</Title>
          </Body>
        </View>
    </View>


  )};


const style = StyleSheet.create({
  container: {
    flex: 1,
    // width: SCREEN_WIDTH,
    // height: 10,
    justifyContent: 'center',
    shadowColor: '#ae9f77',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    height: 800,
    top: -330,
    width: 1500,
    backgroundColor: '#b1d8d2',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end' ,
    paddingBottom: 20,
    position: 'relative'
  },
  title: {
    justifyContent: 'center',
    alignSelf: "center",
    color: '#2a9d8f',
    fontSize: 50,
    height: 60,
    fontWeight: '900',

    
  },




////HOME PAGE STYLES DO NOT DELETE!!!!
  // container: {
  //   flex: 1,
  //   // width: SCREEN_WIDTH,
  //   // height: 10,
  //   justifyContent: 'center',
  //   shadowColor: '#ae9f77',
  //   shadowOffset: { width: 0, height: 4 },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },
  // header: {
  //   height: 800,
  //   top: -420,
  //   width: 1500,
  //   backgroundColor: '#b1d8d2',
  //   borderBottomLeftRadius: 1000,
  //   borderBottomRightRadius: 1000,
  // },
  // body: {
  //   flex: 1,
  //   justifyContent: 'flex-end' ,
  //   paddingBottom: 20
  // },
  // title: {
  //   justifyContent: 'center',
  //   alignSelf: "center",
  //   color: '#2a9d8f',
  //   fontSize: 50,
  //   height: 60,
  //   fontWeight: '900',
  // },
})