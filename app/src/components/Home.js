import React, { useState } from 'react';
import { socket } from '../../App';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';


export default ({ history, socket, createRoom, setRoomId }) => {
  // console.log('rendering');
  const [joinRoomId, setJoinRoomId] = useState('')

  const joinRoom = (roomId) => {
    console.log(roomId);
    socket.emit('joinRoom', roomId, (hasJoined) => {
      console.log('has joined', hasJoined)
      if (hasJoined === false) {
        failToJoinAlert();
      } else {
        setRoomId(roomId);
      }
    })
    

    const failToJoinAlert = () =>
    Alert.alert(
      "Room does not exist",
      "Unable to join room",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );  
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
        <TextInput onChangeText={text => setJoinRoomId(text)} value={joinRoomId}></TextInput>
        <Button title="Join Room" onPress={ () => joinRoom(joinRoomId)}></Button>
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

