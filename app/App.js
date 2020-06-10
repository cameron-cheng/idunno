import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native'
import Home from './src/components/Homepage'
import Room from './src/components/Room'
import Results from './src/components/Results'
import Invitation from './src/components/Invitation'
import Lobby from './src/components/Lobby'
import Login from './src/components/Login'
import Filters from './src/components/Filters'
import Footer from './src/components/Footer'
import io from "socket.io-client";
// import Timer from './src/components/Timer';


export default function App({ parentCallback }) {
const [socket] = useState(() => io('http://192.168.0.37:3000'));
const [roomId, setRoomId] = useState(null)
const [example, setExample] = useState('Hello')


  function createRoom() {
    console.log('sending create room event')
    //event to create a room to server, response with server code
    socket.emit('createRoom', null, (roomId) => {
      console.log(roomId);
      //pass roomId to Share component
     })
  }

  const getData = async () => {
     socket.on('roomCreated', function(data) {
      setRoomId(data)
      console.log(data)
    })
  }

  useEffect(() => {
    getData();
  });

  
  return (
    <NativeRouter>
      
      <View style={styles.container}>
        <Switch>
          <Route exact path="/"  render={(routeProps) => {
            let homeProps = {...routeProps, socket, createRoom }
            return (<Home {...homeProps}/>)}} />
          <Route exact path="/room" exact render={(routeProps)=> <Room {...routeProps} />}/>
          <Route exact path="/results" component={Results}/>
          <Route exact 
            path="/invitation" 
          render={(routeProps) => {
            let invitationProps = {...routeProps, roomId} 
            return (<Invitation {... invitationProps} />)}}/>
          <Route exact path="/lobby" component={Lobby}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/filters" component={Filters}/>
          {/* <Route path="/timer" exact render={(routeProps)=> <Timer {...routeProps} io={socket} /> */}
         />
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
