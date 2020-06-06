import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, PanResponder } from 'react-native';
import Swiper from './Swiper';
import Animated from 'react-native-reanimated';

export default ({ history }) => {
  return(
  
  <>
  <View style={styles.container}>
    <Text>This is the Sessions page </Text>
    <Text>Timer</Text>
      <Button  
        title="change page" 
        onPress={() => history.push("/")}>
      </Button>
    

    <Swiper
    style={styles.swipeContainer}
    />
    
  </View>
  
  </>
)};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  swipeContainer: {
    alignSelf: 'center',
    // justifyContent: 'center',
    flexDirection: "column"
  }
});