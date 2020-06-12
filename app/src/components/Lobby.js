import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Icon } from 'native-base';
import { State } from 'react-native-gesture-handler';
import Header from './Header';
import Footer from './Footer';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Lobby(props) {
  console.log("USERS:", props.users)
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

          <CardItem style={styles.cardItemButtons}>
            <View >
              <TouchableOpacity 
                onPress={props.handleReady}
                style={styles.buttonReady}>
                  <Icon type='Feather' name='check-circle' style={styles.icon}/>
                  <Text style={styles.buttonText}>Ready</Text>
              </TouchableOpacity>
            </View>
            {/* <View > */}
              {/* <TouchableOpacity 
                style={styles.buttonNotReady}>
                  <Icon type='Entypo' name='block' style={styles.icon}/>

                  <Text style={styles.buttonText}>Not Ready</Text>
              </TouchableOpacity> */}
              {/* <Button rounded  
                onPress={(event) => props.handleReady(event)}
                style={styles.button}>
                  <Text style={styles.buttonText}>Ready</Text>
              </Button> */}
              {/* <Button rounded style={styles.buttonNotReady}>
                <Text style={styles.buttonText}>Not Ready</Text>
              </Button> */}
            {/* </View> */}
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>
              CURRENT DECISION MAKERS:
            </Text>
          </CardItem>
          {/* REPLACE WITH PLAYER LOOP */}
          <View style={{backgroundColor:'#f9f1dc'}}>
            {props.users.map((user, index) => {  
              return (
                <UserItem key={index} user={user} />
              )
            })}

          </View>
          {/* ------------------------ */}
        </Card>
      </Content>
    <Footer />
  </Container>
      
  )
};

const UserItem = ({ user }) => {
  return (
    <CardItem style={styles.players}>
      <View style={styles.playersView}>
        <Text style={styles.playerText}>
          {user}
        </Text>
        <Icon type='Feather' name='check-circle' style={styles.playerTrue}/>
        {/* <Icon type='Entypo' name='block' style={styles.playerFalse}/> */}
      </View>
    </CardItem>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: '#fcfaf2',
  },
  content: {
    padding: 15,
    top: 100,
  },
  cardItem: {
    flexDirection:'column', 
    backgroundColor: '#f9f1dc',
    
  },
  cardItemButtons: {
    flexDirection: 'row', 
    height: 70, 
    justifyContent: 'space-between', 
    width: 300, 
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
    fontSize: 15
  },
  title: {
    fontSize: 25
  },
  body: {
    // alignItems: 'center',
    // top: 60
  },
  icon: {
    color: '#fcfaf2', 
    fontSize: 18, 
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonReady: {
    backgroundColor:'#2a9d8f',  
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonNotReady: {
    backgroundColor:'#ee937c',  
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color:'#fcfaf2',
    fontSize: 20, 
    fontWeight: '700', 
    paddingRight: 10, 
    paddingVertical: 10,
    
  },
  playersView: {
    width: 300, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: '#f9f1dc',
  },
  payers:{
    width: 100,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: 80,
    backgroundColor: '#f9f1dc',
    
  },
  playerText: {
    fontSize: 30,
    backgroundColor: '#f9f1dc',
  },
  playerTrue: {
    paddingTop: 2,
    fontSize: 30,
    color: '#2a9d8f',
  },
  playerFalse: {
    paddingTop: 2,
    fontSize: 30,
    color: '#a39571',


  }
  
})