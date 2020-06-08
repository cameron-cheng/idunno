import React from 'react';
import { View, Text, Button } from 'react-native';
import Share from './Share'


export default ({ history }) => {
  return(
<View>
  <Text>This is the Invitation page </Text>
    <Button title="Homepage" onPress={() => history.push("/")}></Button>
    <Share />
</View>
  )};