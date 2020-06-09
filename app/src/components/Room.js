import { API_KEY } from 'react-native-dotenv'
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button } from 'native-base';

import Lobby from './Lobby';
import Swiper from './Swiper';
import Results from './Results';
import { set } from 'react-native-reanimated';

const SCREEN_HEIGHT   = Dimensions.get('window').height;

export default function Room(props) {
  const [lobbyReady, setLobbyReady] = useState(false)
  const [places, setPlaces] = useState([]);

  const area = 'gastown'
  const type = 'restaurant'
  const radius = '500'

  useEffect(() => {
    async function getPlaces() {
      try {  
        const textSearch = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=${area}&type=${type}&radius=${radius}`
        );
        await setPlaces(textSearch.data.results)
        console.log("API Request Finished!", "Length:", places.length)
      } catch(err) {
        console.log(err)
      }
    }
    getPlaces();
  }, []);
  
  function handleReady() {
    if (lobbyReady) {
      setLobbyReady(false)
    } else {
      setLobbyReady(true)
    }
  }

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