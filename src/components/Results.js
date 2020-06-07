import React from 'react';
import { View, Text, Button } from 'react-native';

export default Results((props) => {
  return (
    <View>
      <Text>This is the results page </Text>
        <Button title="home" onPress={() => props.history.push("/")}></Button>
    </View>
  )});