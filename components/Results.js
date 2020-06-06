import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ history }) => {
  return (
<View>
  <Text>This is the results page </Text>
    <Button title="home" onPress={() => history.push("/")}></Button>
</View>
  )};