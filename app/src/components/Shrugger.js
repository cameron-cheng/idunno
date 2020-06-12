import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'react-router-native';
import LottieView from 'lottie-react-native';

export default function Shrugger() {
  const [finished, setFinished] = useState(false);
  
  if (finished) {
      return <Redirect to={{
        pathname: '/results'
      }} />
    }    
  
  return (
    <LottieView source={require('../assets/shrugs-green.json')} autoPlay loop={false} speed={2} onAnimationFinish={() => {
      setFinished(true);
    }}/>
  )
  
  
}