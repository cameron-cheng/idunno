import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Results(props) {

  const results = props.location.results
  const winner = results[Math.floor(Math.random() * results.length)];

  return (
    <View>
      <Text>This is the results page </Text>
      <Text>Result: {winner}</Text>
        <Button title="home" onPress={() => props.history.push("/")}></Button>
    </View>
  )};