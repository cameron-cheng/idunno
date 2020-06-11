import useAPI from '../hooks/useAPI';

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button } from 'native-base';

import Lobby from './Lobby';
import Swiper from './Swiper';
import Results from './Results';
import { set } from 'react-native-reanimated';

const SCREEN_HEIGHT   = Dimensions.get('window').height;

export default function Room({ history, socket }) {
  const [lobbyReady, setLobbyReady] = useState(false);
 
 const [places, setPlaces] = useState([]);

 useEffect( () => {
  socket.on('dataSentToRoom', (data) => {
  console.log("Received Cards")
  console.log('data :>> ', data);
  setPlaces(data);
})},[]) 



 
  
  
  function handleReady() {
    setLobbyReady(!lobbyReady);
    socket.emit('lobbyReady');
  }

  return(
    <View style={styles.container}>
    
      <View>
      <Lobby handleReady={handleReady}/>
      { lobbyReady && <Swiper places={places} /> } 
        <Text>Hello</Text>
      </View>
      <Button title="Homepage" onPress={() => history.push("/")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    // justifyContent: 'center'
  },
  header : {
    justifyContent: 'flex-start',
    marginTop: 36
  },
  footer: {
    flex: 1,
    // justifyContent: 'flex-end',
    // marginBottom: 36,
    bottom: 0,
    position: 'absolute'
  },
});