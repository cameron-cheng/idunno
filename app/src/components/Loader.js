import React, { useState } from 'react';
import { Text } from 'react-native'
import { Route, Redirect } from 'react-router-native'
import LottieView from 'lottie-react-native';

export default Loader = () => {
    const [finished, setFinished] = useState(false);
  
    if (finished) {
      return <Redirect to={{
        pathname: '/swiper'
      }} />
    }    
  
    return <LottieView source={require('../assets/321-main.json')} autoPlay loop={false} onAnimationFinish={() => {
      setFinished(true);
    }} />
  }

  
