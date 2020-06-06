import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ history }) => {
  return (
<View>
  <Text>This is the homepage </Text>
    <Button title="change page" onPress={() => history.push("/sessions")}></Button>
</View>
  )};