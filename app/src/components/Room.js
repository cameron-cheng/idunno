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

  function handleReady() {
    setLobbyReady(!lobbyReady);
    socket.emit('lobbyReady');
  }

  socket.on('dataSentToRoom', (data) => {
    console.log("Received Cards")
    setPlaces(data);
  })
  console.log("PLACES:" , places)

  if (lobbyReady) {
    
    return(
      <View style={styles.container}>
        <Text></Text>
        <View>
          <Swiper places={places}/>
        </View>
        <Button title="Homepage" onPress={() => history.push("/")}></Button>
      </View>
    )
  } else {

    return(
      <View style={styles.container}>
        <Text></Text>
        <View>
          <Lobby handleReady={handleReady}/>
        </View>
        <Button title="Homepage" onPress={() => history.push("/")}></Button>
      </View>
    )
  }
};

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