import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';
import { State } from 'react-native-gesture-handler';
import Header from './Header'


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Lobby(props) {

  return(  
    <Container style={styles.container}>
      <Header />
      <Content style={styles.content}>
        <Card style={styles.card}>
          <CardItem >
            <Text style={styles.text}>Ready to start deciding?</Text>
          </CardItem>
          <CardItem >
            <Body style={styles.body}>
              <Text style={styles.text}>
                Waiting for decision makers...
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text>
                    Ready
                  </Text>

                </TouchableOpacity>
                {/* <Button rounded  
                  onPress={(event) => props.handleReady(event)}
                  // onChange={(event) => props.onChange(event.target.value)}
                  style={styles.buttonReady}>
                    <Text style={styles.buttonText}>Ready</Text>
                </Button> */}
                <Button rounded style={styles.buttonNotReady}>
                  <Text style={styles.buttonText}>Not Ready</Text>
                </Button>
              </View>
              <View>
                {/* {changeBool} */}
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
      
  )
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: '#fcfaf2',
    
    
  },
  content: {
    padding: 10,
    top: 100,
  },
  card: {
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
  body: {
    // alignItems: 'center',
    // top: 60
  },
  buttonReady: {
    paddingLeft: 20, 
    paddingRight: 20,
    color: '#ee977a'
  },
  buttonNotReady: {
    paddingLeft: 20, 
    paddingRight: 20,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
  
})