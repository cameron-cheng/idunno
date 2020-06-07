import React from 'react';
import { View, Text, Button } from 'react-native';


export default ({ history }) => {
  return (
<View>
  <Text>This is the homepage </Text>
    <Button title="Sessions" onPress={() => history.push("/sessions")}></Button>
    <Button title="Results" onPress={() => history.push("/results")}></Button>
    <Button title="Invitation" onPress={() => history.push("/invitation")}></Button>
    <Button title="Lobby" onPress={() => history.push("/lobby")}></Button>
    <Button title="Login" onPress={() => history.push("/login")}></Button>
     
</View>
  )};