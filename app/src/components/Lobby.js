import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';
import { State } from 'react-native-gesture-handler';
import Header from './Header';
import Footer from './Footer'
import io from 'socket.io-client'


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Lobby(props) {
  const [userJoining, setUserJoining] = useState(false)
  const socket = props.socket
  useEffect(() => {
    if(userJoining === false) {
      console.log('joining room');
      // props.socket.emit('connect', true);
    }
  },[])

  const playersReady = () => {
    //loop through players in room and return <Text>Name</Text> and <Icon type='Entypo' name='block'/>
    //if player not ready - "not ready" button should not be pressable: greyed out?
    //if player ready, change icon to <Icon type='FontAwesome' name='check'/>
  }

  return(  
    <Container style={styles.container}>
      <Header />
      <Content style={styles.content}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Text style={styles.title}>Ready to start deciding?</Text>
          </CardItem>
          <CardItem style={{ flexDirection: 'row', height: 70, justifyContent: 'space-evenly', width: SCREEN_WIDTH -30, backgroundColor: '#f9f1dc' }}>
            <View >
              <TouchableOpacity 
                onPress={props.handleReady}
                style={styles.buttonReady}>
                  <Text style={styles.buttonText}>Ready</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity 
                style={styles.buttonNotReady}>
                  <Text style={styles.buttonText}>Not Ready</Text>
              </TouchableOpacity>
              {/* <Button rounded  
                onPress={(event) => props.handleReady(event)}
                style={styles.button}>
                  <Text style={styles.buttonText}>Ready</Text>
              </Button> */}
              {/* <Button rounded style={styles.buttonNotReady}>
                <Text style={styles.buttonText}>Not Ready</Text>
              </Button> */}
            </View>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>
              Waiting for decision makers...
            </Text>
          </CardItem>
        </Card>
      </Content>
    <Footer />
  </Container>
      
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: '#fcfaf2',
  },
  content: {
    padding: 10,
    top: 100,
  },
  cardItem: {
    flexDirection:'column', 
    backgroundColor: '#f9f1dc',
    
  },
  card: {
    // justifyContent: 'space-evenly',
    borderRadius: 20,
    height: 400,
    alignItems: 'center',
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    borderTopLeftRadius:20, 
    borderTopRightRadius:20,
  },
  text: {
    fontSize: 25
  },
  title: {
    fontSize: 25
  },
  body: {
    // alignItems: 'center',
    // top: 60
  },
  buttonReady: {
    backgroundColor:'#2a9d8f',  
    borderRadius: 10,
  },
  buttonNotReady: {
    backgroundColor:'#ee937c',  
    borderRadius: 10,
  },
  buttonText: {
    color:'#fcfaf2',
    fontSize: 20, 
    fontWeight: '700', 
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  
})