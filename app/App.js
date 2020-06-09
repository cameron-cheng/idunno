import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native'
import Home from './src/components/Homepage'
import Room from './src/components/Room'
import Results from './src/components/Results'
import Invitation from './src/components/Invitation'
import Lobby from './src/components/Lobby'
import Login from './src/components/Login'
import io from "socket.io-client";
// import Timer from './src/components/Timer';


export default function App() {
const [socket] = useState(() => io('http://192.168.0.37:3000'));
 //[roomId, setRoomId] = useState(null)
 
 //console.log('roomId :>> ', roomId);
//  console.log('setRoomId :>> ', setRoomId);
  return (
    <NativeRouter>
      
      <View>
        <Switch>
          <Route exact path="/"  render={(routeProps) => {
            let homeProps = {...routeProps, socket}
            return (<Home {...homeProps}/>)}} />
          <Route exact path="/room" exact render={(routeProps)=> <Room {...routeProps} />}/>
          <Route exact path="/results" component={Results}/>
          <Route exact path="/invitation" component={Invitation}/>
          <Route exact path="/lobby" component={Lobby}/>
          <Route exact path="/login" component={Login}/>
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
