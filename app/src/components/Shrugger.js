import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'react-router-native';
import LottieView from 'lottie-react-native';

export default function Shrugger(props) {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFinished(true)
    }, 2000)
  }, [])
  
  if (finished) {
    return <Redirect to={{
      pathname: '/results'
    }} />
  }    

  return (
    <LottieView source={require('../assets/shrugs-green.json')} autoPlay speed={1.5} />
  )
}