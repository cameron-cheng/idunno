import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';

export default ({ history, socket }) => {
  
  function createRoom() {
    console.log('sending create room event')
    //event to create a room to server, response with server code
    socket.emit('createRoom', null, (roomId) => {
      console.log(roomId);
     })
  }
  return (

  <View style={style.container}>
    <Header />
    <View style={{flex: 1, justifyContent: 'space-between'} }>
      <Button title="Filters" onPress={() => history.push("/filters")}></Button>
      <Button title="Room" onPress={() => history.push("/room")}></Button>
      <Button title="Results" onPress={() => history.push("/results")}></Button>
      <Button title="Invitation" onPress={() => history.push("/invitation")}></Button>
      <Button title="Lobby" onPress={() => history.push("/lobby")}></Button>
      <Button title="Login" onPress={() => history.push("/login")}></Button>
      <Button title="Create Room" onPress={ createRoom }></Button>
    </View>
    <Footer />
  </View>
  )};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf2',
    flexDirection: 'column',
  }

})

