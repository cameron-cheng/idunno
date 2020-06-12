import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Timer({ seconds }) {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  const [finished, setFinished] = useState(false);
  
  if (finished === 0) {
    return <Redirect to={{
      pathname: '/swiper'
    }} />
  }    

  return (
    <View style={style.container}>
      <Text style={style.text}> {timeLeft} </Text> 
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 10,
    
  },

  text: {
    color: 'white',
    fontSize: 30	
  }
  


})