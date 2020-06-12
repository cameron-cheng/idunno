import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { Route, Redirect } from 'react-router-native'
import LottieView from 'lottie-react-native';

export default Shrugger = () => {
    const [finished, setFinished] = useState(false);
  
    if (finished) {
      return <Redirect to={{
        pathname: '/results'
      }} />
    }    
  
    return (
    // <View style={{backgroudColor: "pink"}}>
     <LottieView source={require('../assets/idunnoShruggerFix.json')} autoPlay duration={3000} loop={false} onAnimationFinish={() => {
      setFinished(true);
    }} />
    // </View>
    )
}

  
