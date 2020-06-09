import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button } from 'native-base';
import Swiper from './Swiper';
import Lobby from './Lobby';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Room(props) {
  const [lobbyReady, setLobbyReady] = useState(false)

  function handleReady() {
    if (lobbyReady) {
      props.sendReady()
      setLobbyReady(false)
      console.log(lobbyReady)
    } else {
      props.sendReady()

      setLobbyReady(true)
      console.log(lobbyReady)
    }
  }

  if (lobbyReady) {
    return(
      <View style={styles.container}>
        <Text></Text>
        <View>
          <Swiper />
        </View>
        <Button title="Homepage" onPress={() => history.push("/")}></Button>
      </View>
    )

  } else {
    return(
      <View style={styles.container}>
        <Text></Text>
        <View>
          <Lobby handleReady = {handleReady}/>
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