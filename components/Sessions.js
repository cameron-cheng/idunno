import React from 'react';
import { View, Text, Button } from 'react-native';
import Swiper from './swiper';

export default ({ history }) => {
  return(
<View>
  <Text>This is the Sessions page </Text>
  <Text>Timer</Text>
    <Swiper />
    <Button  
      title="change page" 
      onPress={() => history.push("/")}>
    </Button>
</View>
  )};