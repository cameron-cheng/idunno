import React from 'react';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export default function JoinRoom() {
  const [joinRoomId, setJoinRoomId] = useState('')

  const handleJoinRoom = () => {
    joinRoom(joinRoomId);
    history.push("/room");
  }
  
  <Input title="Join!" onChangeText={text => setJoinRoomId(text)} value={joinRoomId} ></Input>
  <Button title="Join Room" onPress={handleJoinRoom}></Button>
}







const [nickname, setNickName] = useState('')
  
<Input title="nickname!" onChangeText={text => setNickName(text)} value={joinRoomId} ></Input>
<Button title="Submit" onPress={handleJoinRoom}></Button>
socket.emit('send-nickname', nickname);