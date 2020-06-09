
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button, Left, Right, Icon, Title  } from 'native-base';
import { State } from 'react-native-gesture-handler';
// import LottieView from 'lottie-react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Footer(props) {
  
  return (
    <View style={style.container}>
      {/* <ImageBackground style ={{width:SCREEN_WIDTH}} source={{uri: "https://www.transparenttextures.com/patterns/asfalt-light.png"}}> */}
        <Header span style={style.header}>
        
          <Body style={style.body}>
            <Title style={style.title}>iDUNNO</Title>
          </Body>
          
        </Header>
      {/* </ImageBackground> */}
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
    // flex: 1,
    width: SCREEN_WIDTH,
    // height: 80
    justifyContent: 'center',
    shadowColor: '#988a55',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    height: 80,
    backgroundColor: '#ee977a',
    // backgroundImage: url("https://www.transparenttextures.com/patterns/asfalt-light.png")
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