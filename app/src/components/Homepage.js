import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer'


export default ({ history }) => {
  return (
  <View>
    <Header />
      <Button title="Sessions" onPress={() => history.push("/sessions")}></Button>
      <Button title="Results" onPress={() => history.push("/results")}></Button>
      <Button title="Invitation" onPress={() => history.push("/invitation")}></Button>
      <Button title="Lobby" onPress={() => history.push("/lobby")}></Button>
      <Button title="Login" onPress={() => history.push("/login")}></Button>
    <Footer />
  </View>
  )};

const style = StyleSheet.create({
  // button

})