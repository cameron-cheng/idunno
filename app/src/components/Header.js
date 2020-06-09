
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button, Left, Right, Icon, Title } from 'native-base';
import { State } from 'react-native-gesture-handler';
// import LottieView from 'lottie-react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Footer(props) {
  
  return (
    <View style={style.container}>
      <Header span style={style.header}>
       
        <Body style={style.body}>
          <Title style={style.title}>iDUNNO</Title>
        </Body>
        
      </Header>
    </View>




      // <LottieView
      //   source={require('../assets/lottie/idunnoFinal.json')}
      //   autoPlay
      //   loop
      // />
    
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    // height: 
  },
  header: {
    backgroundColor: '#ee977a',
    justifyContent: 'center',
    height: 100
  },
  body: {
    flex: 1,
    justifyContent: 'center' 
    
  },
  title: {
    justifyContent: 'center',
    alignSelf: "center",
    color: '#fcfaf2',
    fontSize: 40,
    fontFamily: 'AppleSDGothicNeo-Bold'
    
  },
})