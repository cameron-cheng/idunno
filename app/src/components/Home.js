import React, { useState, useRef } from 'react';

import { Alert, View, Text, StyleSheet, Button, TouchableOpacity,  } from 'react-native';
import { Input } from 'react-native-elements';
import { Redirect } from 'react-router-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import Header from './Header';
import Footer from './Footer';
import Results from './Results';
import Loader from './Loader';
import LottieView from 'lottie-react-native';

import { AppLoading } from 'expo';
import { useFonts, Candal_400Regular } from '@expo-google-fonts/candal';

export default ({ history, joinRoom, redirectLobby }) => {

  const [joinRoomId, setJoinRoomId] = useState('')
  const [nickname, setNickname] = useState('')

  const handleJoinRoom = () => {
    joinRoom(joinRoomId, nickname)
  }

  const handleNewRoom = () => {
    history.push("/filters");
  }
  
  if (redirectLobby) {
    return <Redirect to='/room' />
  }

  let [fontsLoaded] = useFonts({
    Candal_400Regular,
  });
 
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (

    <View style={styles.container}>
      <Header />
      {/* <View style={{flex: 1, justifyContent: 'space-between'} }> */}
      
        {/* <Button title="Create Room" onPress={() => history.push('/filters')}></Button> */}

       
      <View style={{flex: 5, padding: 20, alignItems: 'center', }}>
        <View style={{flex:1, width:300, top: 20, justifyContent:'space-around' }}>

          {/* <Button title="shrugger" onPress={() => history.push('/shrugger')}></Button>
          <Button title="results styling" onPress={() => history.push('/results')}></Button> */}
          {/* <Text style={styles.hello}>Hello</Text> */}

          <Card style={styles.card}>
           
          <Text style={styles.shrugger}>¯\_(ツ)_/¯</Text>
            <TouchableOpacity onPress={handleNewRoom} style={styles.buttonNew}>
              <Text style={styles.buttonText}>NEW DECISION</Text>
            </TouchableOpacity>
          </Card>

          <Card style={styles.card}>
            <Input placeholder="Your Name" style={{}} onChangeText={text => setNickname(text)} value={nickname} ></Input>
            <Input placeholder="Decision Code" style={{}} onChangeText={text => setJoinRoomId(text.toUpperCase().trim())} value={joinRoomId} ></Input>
            <TouchableOpacity onPress={handleJoinRoom} style={styles.buttonJoin}>
              
              <Text style={styles.buttonText}>JOIN DECISION</Text>
            </TouchableOpacity>
          </Card>

                  
        </View>
      </View>
     <Footer />
   </View>
 )};
}
      

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
    padding: 10, 
    borderRadius: 10,
    width: 200,
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 10,
  },
  buttonNew: {
    backgroundColor:'#ee937c', 
    padding: 10, 
    borderRadius: 10,
    width: 200,
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 10,
    // position: 'absolute',
    // top: 380
  },
  // home buttons
  buttonText: {
    fontSize: 20, 
    color: '#fcfaf2', 
    fontWeight: '800',
    alignSelf: 'center',
    // fontFamily: 'Candal_400Regular'
  },
  shrugger: {
    fontSize: 50,
    color: '#2a9d8f',
    fontWeight: '600',
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 10,
    paddingBottom: 30
  },
  card: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
    justifyContent: 'space-between',
  }

})

