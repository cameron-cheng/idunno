import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Footer, FooterTab, Button, Left, Right, Icon, Title } from 'native-base';
import { State } from 'react-native-gesture-handler';
// import LottieView from 'lottie-react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Lobby(props) {
  
  return (
    <View style={style.container}>
       <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>

            <Button active>
              <Icon active name="camera" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
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