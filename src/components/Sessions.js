import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Swiper from './Swiper'

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default ({ history }) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>HEADER</Text>
      </View>
      <View>
        <Swiper />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.footer}>
          <Text>FOOTER</Text>
        </View>
      </View>
      <Button title="Homepage" onPress={() => history.push("/")}></Button>
    </View>
  )};

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