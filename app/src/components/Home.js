import React, { useState } from 'react';

import { Alert, View, TextInput, Text, StyleSheet, Button, TouchableOpacity,  } from 'react-native';
import { Input} from 'react-native-elements';

import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Loader from './Loader';
import LottieView from 'lottie-react-native';




export default ({ history, joinRoom }) => {
  
  const [joinRoomId, setJoinRoomId] = useState('')
  const [nickname, setNickname] = useState('')

  const handleJoinRoom = () => {
    joinRoom(joinRoomId, nickname)
    history.push("/room");
  }

  const handleNewRoom = () => {
    history.push("/filters");
  }
  
  return (

    <View style={styles.container}>
      <Header />
      {/* <View style={{flex: 1, justifyContent: 'space-between'} }> */}
      
        {/* <Button title="Create Room" onPress={() => history.push('/filters')}></Button> */}

       
      <View style={{flex: 5, padding: 20,  justifyContent: 'space-evenly', alignItems: 'center', }}>
        <View style={{width:300}}>
        
        <Button title="shrugger" onPress={() => history.push('/shrugger')}></Button>



      
          <Input placeholder="Nickname" style={{}} onChangeText={text => setNickname(text.trim())} value={nickname} ></Input>
          <Input placeholder="Room Code" style={{}} onChangeText={text => setJoinRoomId(text.toUpperCase().trim())} value={joinRoomId} ></Input>
          <TouchableOpacity onPress={handleJoinRoom} style={styles.buttonJoin}>
            <Text style={styles.buttonText}>JOIN DECISION</Text>
          </TouchableOpacity>
          <Text style={styles.shrugger}>¯\_(ツ)_/¯</Text>
          <TouchableOpacity onPress={handleNewRoom} style={styles.buttonNew}>
            <Text style={styles.buttonText}>NEW DECISION</Text>
          </TouchableOpacity>
        
        
        {/* <Input placeholder="Nickname" style={{}} onChangeText={text => setNickname(text.trim())} value={nickname} ></Input>
        <Input placeholder="Room Code" style={{}} onChangeText={text => setJoinRoomId(text.toUpperCase().trim())} value={joinRoomId} ></Input>
        
        <TouchableOpacity onPress={handleJoinRoom} style={styles.buttons}>
          <Text style={styles.buttonText}>JOIN DECISION</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.shrugger}>¯\_(ツ)_/¯</Text>
        <TouchableOpacity onPress={handleNewRoom} style={styles.buttons}>
          <Text style={styles.buttonText}>NEW DECISION</Text>
        </TouchableOpacity>
         */}
        
        </View>

      </View>
      

      {/* <Button title="Join Room" onPress={handleJoinRoom}></Button> */}
     {/* </View> */}
     <Footer />
   </View>
 )};


 const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fcfaf2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  //home buttons
  buttonJoin: {
    backgroundColor:'#ee937c', 
    padding: 20, 
    borderRadius: 10,
    width: 300,
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 10,
  },
  buttonNew: {
    backgroundColor:'#ee937c', 
    padding: 20, 
    borderRadius: 10,
    width: 300,
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 10,
    position: 'absolute',
    top: 380
  },
  // home buttons
  buttonText: {
    fontSize: 30, 
    color: '#fcfaf2', 
    fontWeight: '800',
    alignSelf: 'center'
  },
  shrugger: {
    fontSize: 70,
    color: '#2a9d8f',
    fontWeight: '600',
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingBottom: 50,
    paddingTop: 50
  }


})

