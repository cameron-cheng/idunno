import React, { useState } from 'react';
import { Text } from 'react-native'
import { Route, Redirect } from 'react-router-native'
import LottieView from 'lottie-react-native';
import Swiper from './Swiper';

export default Loader = () => {
  const [finished, setFinished] = useState(false);

  if (finished) {
    return <Redirect to={{
      pathname: '/results'
    }} />
  }    

  return <LottieView source={require('../assets/cd10.json')} autoPlay loop={false} onAnimationFinish={() => {
    setFinished(true);
  }} />
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf2',
    flexDirection: 'column',
  }

})
