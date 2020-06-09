
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button, Left, Right, Icon, Title  } from 'native-base';
import { State } from 'react-native-gesture-handler';
// import LottieView from 'lottie-react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Footer(props) {
  
  return (
    <View style={style.container}>
        <Header span style={style.header}>
          <Body style={style.body}>
            <Title style={style.title}>¯\_(ツ)_/¯</Title>
          </Body>
        </Header>
    </View>

  );

}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    width: SCREEN_WIDTH,
    // height: 80,
    justifyContent: 'center',
    shadowColor: '#ae9f77',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    height: 80,
    backgroundColor: '#b1d8d2',
    // backgroundImage: url("https://www.transparenttextures.com/patterns/asfalt-light.png")
  },
  body: {
    flex: 1,
    justifyContent: 'center' 
    
  },
  title: {
    justifyContent: 'center',
    alignSelf: "center",
    color: '#2a9d8f',
    fontSize: 50,
    height: 60,
    fontWeight: '900',
    fontFamily: 'AppleSDGothicNeo-Bold'
    
  },
})