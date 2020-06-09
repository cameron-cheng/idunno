import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer'





export default ({ history, socket }) => {
  console.log('rendering');
  function createRoom() {
    console.log('sending create room event')
    //event to create a room to server, response with server code
    socket.emit('createRoom', null, (roomId) => {
      console.log(roomId);
     })
  }
  return (
<View>
  <Text>This is the homepage </Text>
    <Button title="Room" onPress={() => history.push("/room")}></Button>
    <Button title="Results" onPress={() => history.push("/results")}></Button>
    <Button title="Invitation" onPress={() => history.push("/invitation")}></Button>
    <Button title="Lobby" onPress={() => history.push("/lobby")}></Button>
    <Button title="Login" onPress={() => history.push("/login")}></Button>

    <Button title="Create Room" onPress={ createRoom }></Button>
  </View>
  )};
