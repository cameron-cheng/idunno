import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native'
import Homepage from './src/components/Homepage'
import Sessions from './src/components/Sessions'
import Results from './src/components/Results'
import Invitation from './src/components/Invitation'
import Lobby from './src/components/Lobby'
import Login from './src/components/Login'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sessions" component={Sessions} />
          <Route exact path="/results" component={Results}/>
          <Route exact path="/invitation" component={Invitation}/>
          <Route exact path="/lobby" component={Lobby}/>
          <Route exact path="/login" component={Login}/>

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
