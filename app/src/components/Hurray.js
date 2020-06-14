import React, { useState } from 'react';
import { Text } from 'react-native'
import { Route, Redirect } from 'react-router-native';
import LottieView from 'lottie-react-native';

export default Hurray = () => {
    const [finished, setFinished] = useState(false);
  
    // if (finished) {
    //   return <Redirect to={{
    //     pathname: '/swiper'
    //   }} />
    // }    
  
    return <LottieView source={require('../assets/hurray.json')} autoPlay loop={false} onAnimationFinish={() => {
      setFinished(true);
    }} />
  }

  
