import React from 'react';
import { View, Text, Button } from 'react-native';
import Share from './Share'

export default ({history, example, roomId} ) => {

  return(
<View>
  <Text>This is the Invitation page </Text>
    <Button title="Homepage" onPress={() => history.push("/")}></Button>
    <Share roomId={roomId}/>
    <Button title="Lobby" onPress={() => history.push("/lobby")}></Button>
</View>
  )}; 