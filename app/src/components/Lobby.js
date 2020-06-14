import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Icon } from 'native-base';
import { State } from 'react-native-gesture-handler';
import Header from './Header';
import Footer from './Footer';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

import { AppLoading } from 'expo';
import { useFonts, Candal_400Regular } from '@expo-google-fonts/candal';

export default function Lobby(props) {

  let [fontsLoaded] = useFonts({
    Candal_400Regular,
  });

  const UserItem = ({ user }) => {
    return (
      <View style={{padding:20, alignItems: 'center'}}>
        <Icon type='Feather' name='check-circle' style={styles.playerTrue}/>
        <Text>{user}</Text>
      </View>
    )
  }
  
  const hostButton = () => {
    if (props.users[0] === props.name) {
      return (
        <TouchableOpacity 
          onPress={props.handleReady}
          style={styles.buttonReady}>
            <Icon type='Feather' name='check-circle' style={styles.icon}/>
            <Text style={styles.buttonText}>Start!</Text>
        </TouchableOpacity>
      )
    } else {
      return <Text>Waiting For Host To Start...</Text>
    }
  }

  return(  
    <Container style={styles.container}>
      <Header />
      <View style={{margin: 50, }}>
        <View style={{width: 350, top: 20, height: 490,justifyContent: 'center',alignSelf: 'center'}}>
          <Card style={styles.cardMain}>
            <View>
            <Text style={styles.text}>
              CURRENT DECISION MAKERS:
            </Text>
            <CardItem style={{width: 300, borderRadius:20, justifyContent: 'space-between',  flexWrap: 'wrap',  }}>
            {props.users.map((user, index) => {  
                  return (
                    <UserItem key={index} user={user} />
                  )
              })}
            </CardItem>
            </View>
            <View>
              <Text style={styles.title}>Ready to start deciding?</Text>
              <CardItem style={styles.cardItemButtons}>
                <View >
                  {hostButton()}
                </View>
              </CardItem>
            </View>
          </Card>
        </View>

      {/* <Content style={styles.content}>
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
            
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>
              CURRENT DECISION MAKERS:
            </Text>
          </CardItem>

          
          
        </Card>
      </Content> */}
      </View>
    <Footer />
  </Container>
      
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: SCREEN_WIDTH,
    backgroundColor: '#fcfaf2',
    justifyContent: 'center',
  },
  cardMain: {
    flex:1,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardPlayers: {
    backgroundColor: '#fcfaf2',
    borderRadius: 20,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#fcfaf2',
    width: 300,
    // justifyContent: 'space-between'
   
    
  },
  // content: {
  //   padding: 15,
  //   top: 100,
  //   width: 300,
  //   alignSelf: 'center'
  // },
  cardItem: {
    flexDirection:'column', 
    backgroundColor: '#f9f1dc',
    borderRadius: 20,
    
  },
  cardItemButtons: {
    flexDirection: 'row', 
    height: 70, 
    justifyContent: 'center', 
    width: 300, 
    backgroundColor: '#f9f1dc',
  },
  // card: {
  //   // justifyContent: 'space-evenly',
  //   borderRadius: 20,
  //   height: 400,
  //   alignItems: 'center',
  //   backgroundColor: '#f9f1dc',
  //   shadowColor: '#988a55',
  //   shadowOffset: { width: 2, height: 4 },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },
  // header: {
  //   borderTopLeftRadius:20, 
  //   borderTopRightRadius:20,
  // },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    padding: 20
  },
  title: {
    fontSize: 25,
    alignSelf: 'center'
  },
  // body: {
  //   // alignItems: 'center',
  //   // top: 60
  // },
  icon: {
    color: '#fcfaf2', 
    fontSize: 18, 
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonReady: {
    backgroundColor:'#e76f51',  
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  // buttonNotReady: {
  //   backgroundColor:'#e76f51',  
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // },
  buttonText: {
    color:'#fcfaf2',
    fontSize: 20, 
    fontWeight: '700', 
    paddingRight: 10, 
    paddingVertical: 10,
    // fontFamily: 'Candal_400Regular'
    
  },
  playersView: {
    width: 257, 
    // flexDirection: 'row', 
    // justifyContent: 'space-between',
    backgroundColor: '#fcfaf2',
  },
  payers:{
    width: 100,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: 80,
    backgroundColor: '#f9f1dc',
    
  },
  playerText: {
    // fontSize: 30,
    backgroundColor: '#f9f1dc',
  },
  playerTrue: {
    paddingTop: 2,
    fontSize: 30,
    color: '#2a9d8f',
  },
  
})


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