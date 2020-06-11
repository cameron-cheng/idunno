import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native';

import Home from './src/components/Home';
import Room from './src/components/Room';
import Results from './src/components/Results';
import Invitation from './src/components/Invitation';
import Lobby from './src/components/Lobby';
import Login from './src/components/Login';
import Filters from './src/components/Filters';
import Footer from './src/components/Footer';
import io from "socket.io-client";
import { IP_ADDRESS } from 'react-native-dotenv';
import Loader from './src/components/Loader'
import Swiper from './src/components/Swiper';

const socket = io(IP_ADDRESS)



export default function App() {
  
  const [socket] = useState(() => io(IP_ADDRESS));
  
  const [roomId, setRoomId] = useState(null)

  const [filters, setFilters] = useState({
    searchType: 'area',
    type: 'restaurant',
    area: null,
    radius: 500,
    price: 1,
    vegan: false,
    familyFriendly: false
  })

  function createRoom() {
    console.log('sending create room event')
    //event to create a room to server, response with server code
    socket.emit('createRoom', filters, (roomId) => {
      console.log("ROOM CODE:", roomId);
      setRoomId(roomId);
      //pass roomId to Share component
     })
  }
  
  return (
    <NativeRouter>
      
      <View style={styles.container}>
        <Switch>
          <Route exact path="/"  render={(routeProps) => {
            let homeProps = { ...routeProps, socket, createRoom, setRoomId, filters, setFilters }
            return (<Home {...homeProps}/>)}} />

          <Route exact path="/lobby" component={Lobby}/>
          <Route exact path="/room" exact render={(routeProps)=> {
            let roomProps = { ...routeProps, socket, filters }
            return (<Room {...roomProps}/>)}} />
            
          <Route exact path="/results" component={Results}/>
          <Route exact path="/invitation" exact render={(routeProps) => {
            let invitationProps = {...routeProps, roomId} 
            return (<Invitation {... invitationProps} />)}}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/loader" component={Loader}/>
          <Route exact path ="/swiper" exact render={(routeProps) => {
            let swiperProps = {...routeProps} 
            return (<Swiper {... swiperProps} />)}}/>
      </Switch>

      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
