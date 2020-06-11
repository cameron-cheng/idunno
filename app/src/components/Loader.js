import React from 'react';
import { Route, Redirect } from 'react-router-native'
import LottieView from 'lottie-react-native';

export default class Loader extends React.Component {
  render() {
   return  <LottieView source={require('../assets/321-main.json')} autoPlay loop={false} onAnimationFinish={() => {
     <Redirect to={{
      pathname: '/room',
     
    }} />
   }} />
   
  }
}