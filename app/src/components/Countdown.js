import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'react-router-native';

export default function Countdown(props) {
  // initialize timeLeft with the seconds prop

  const [timeLeft, setTimeLeft] = useState(30);
  
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;
    
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    // clear interval on re-render to avoid memory leaks
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);
  
  const [finished, setFinished] = useState(false);
  
  if (timeLeft === 0) {
    console.log("OUT of TIME")
    props.readyForResult();
    return <Redirect to='/shrugger' />
  }    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TIMER: </Text>
      <Text style={styles.text}> {timeLeft} </Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ee937c',
    borderRadius: 10,
    // width: 150,
    justifyContent: 'center',
    flexDirection: 'row'
    // position: 'absolute'
  },

  text: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    paddingVertical: 10
  }
  


})