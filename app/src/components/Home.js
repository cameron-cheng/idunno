import React, { useState } from 'react';
import { Alert, View, TextInput, Text, StyleSheet, Button, TouchableOpacity,  } from 'react-native';
import { Input} from 'react-native-elements';
// import { Button } from 'native-base';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Loader from './Loader';
import LottieView from 'lottie-react-native';




export default ({ history, createRoom, joinRoom, setRoomId, filters, setFilters }) => {
  
  const [joinRoomId, setJoinRoomId] = useState('')

  const handleJoinRoom = () => {
    joinRoom(joinRoomId);
    history.push("/room");
  }
  
  const handleCreateRoom = () =>{
    createRoom();
    history.push("/room");
  }
  
  return (
    <View style={styles.container}>
      {/* <View style={{}}>
        <Header />
      </View> */}
      {/* ----- MAIN HOME ----- */}
      {/* <View style={{  flex: 1,padding: 20, justifyContent: 'space-evenly', alignItems: 'center', }}>
        <TouchableOpacity style={styles.buttons}><Text style={styles.buttonText}>NEW DECISION</Text></TouchableOpacity>
        <Text style={styles.shrugger}>¯\_(ツ)_/¯</Text>
        <TouchableOpacity style={styles.buttons}><Text style={styles.buttonText}>JOIN DECISION</Text></TouchableOpacity>
      </View> */}
      {/* ----- MAIN HOME ----- */}

      <View style={{}}>
        <View style={{}}>
          <Text style={{fontSize: 60}}>HI</Text>
          <Filters state={filters} setState={setFilters} style ={{justifyContent: 'center',}}/>
        </View>
        <View style={{flex: 1} }>
          <Button title="Create Room"
            onPress={handleCreateRoom}
            >
          </Button>


          <Input title="Join!" onChangeText={text => setJoinRoomId(text)} value={joinRoomId} ></Input>
          <Button title="Join Room" onPress={handleJoinRoom}></Button>
        </View>
      </View>
      {/* <View style={{}}>
       <Footer />
      </View> */}
      
    </View>
 )};
 
 {/* <Button title="Filters" onPress={() => history.push("/filters")}></Button> */}
 {/* <Button title="Room" onPress={() => history.push("/room")}></Button> */}
 {/* <Button title="Results" onPress={() => history.push("/results")}></Button> */}
 {/* <Button title="Invitation" onPress={() => history.push("/invitation")}></Button> */}
 {/* <Button title="Lobby" onPress={() => history.push("/lobby")}></Button> */}
 {/* <Button title="Login" onPress={() => history.push("/login")}></Button> */}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  //home buttons
  buttons: {
    backgroundColor:'#ee937c', 
    padding: 20, 
    borderRadius: 10,
    width: 300,
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  // home buttons
  buttonText: {
    fontSize: 30, 
    color: '#fcfaf2', 
    fontWeight: '800',
    alignSelf: 'center'
  },
  shrugger: {
    fontSize: 70,
    color: '#2a9d8f',
    fontWeight: '600',
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingBottom: 100,
    paddingTop: 100
  }

})

