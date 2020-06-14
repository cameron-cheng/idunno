import React, { useState } from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native'
import { Route, Redirect } from 'react-router-native';
import LottieView from 'lottie-react-native';
import { Overlay } from "react-native-elements"


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default Hurray = () => {
    const [finished, setFinished] = useState(false);
    // if (finished) {
    //   return <Redirect to={{
    //     pathname: '/swiper'
    //   }} />
    // }    

    function toggleOverlay() {
      if (finished) {
        return styles.notVisible
      }  else {
        styles.visible
      }
    }
      
    //   setVisible(!visible);
    // }


    return (
      // <Overlay style={toggleOverlay}>
      <LottieView source={require('../assets/hurray2.json')} autoPlay loop={false} onAnimationFinish={() => {setFinished(true)}}
      style={toggleOverlay()} />
    // </Overlay>
    )
}

  
const styles = StyleSheet.create({
  visible: {
    // flex: 1, 
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    zIndex:1000,
    position: 'absolute'
  },
  notVisible: {
    display: 'none'
  }
})

