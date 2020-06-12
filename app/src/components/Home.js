import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Loader from './Loader';


export default ({ history, joinRoom }) => {
  
  const [joinRoomId, setJoinRoomId] = useState('')
  const [nickname, setNickname] = useState('')

  const handleJoinRoom = () => {
    joinRoom(joinRoomId, nickname)
    history.push("/room");
  }
  
  return (
    <View style={style.container}>
      <Header />
      <View style={{flex: 1, justifyContent: 'space-between'} }>
      
        <Button title="Create Room" onPress={() => history.push('/filters')}></Button>

        <Input placeholder="Room Code" onChangeText={text => setJoinRoomId(text.toUpperCase().trim())} value={joinRoomId} ></Input>
        <Input placeholder="Nickname" onChangeText={text => setNickname(text.trim())} value={nickname} ></Input>
        <Button title="Join Room" onPress={handleJoinRoom}></Button>
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

