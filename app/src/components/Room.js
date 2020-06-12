import useAPI from '../hooks/useAPI';

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button } from 'native-base';

import Lobby from './Lobby';
import Loader from './Loader';
import Results from './Results';
import { set } from 'react-native-reanimated';
import { Redirect } from 'react-router-native';

const SCREEN_HEIGHT   = Dimensions.get('window').height;

export default function Room({ history, emitReady, users }) {
  const [lobbyReady, setLobbyReady] = useState(false);
  // console.log("ROOM PROPS:", places.length)
  function handleReady() {
    setLobbyReady(!lobbyReady);
    emitReady();
  }

  if (lobbyReady) {
    return <Loader /> 
  } else {
    return(
      <View style={styles.container}>
        <View>
          <Lobby handleReady={handleReady} users={users}/>
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