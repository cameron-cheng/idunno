import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Shrugger() {

  return (
    <LottieView source={require('../assets/shrugs-green.json')} autoPlay/>
  )
  
  
}