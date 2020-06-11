import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Loader from './Loader';


export default ({ history, createRoom, joinRoom, setRoomId, filters, setFilters }) => {
  

  
  const handleCreateRoom = () =>{
    createRoom();
    history.push("/room");
  }
  
  return (
    <View style={style.container}>
      <Header />
      <Filters state={filters} setState={setFilters}/>
      <View style={{flex: 1, justifyContent: 'space-between'} }>
        {/* <Button title="Filters" onPress={() => history.push("/filters")}></Button> */}
        {/* <Button title="Room" onPress={() => history.push("/room")}></Button> */}
        {/* <Button title="Results" onPress={() => history.push("/results")}></Button> */}
        {/* <Button title="Invitation" onPress={() => history.push("/invitation")}></Button> */}
        {/* <Button title="Lobby" onPress={() => history.push("/lobby")}></Button> */}
        {/* <Button title="Login" onPress={() => history.push("/login")}></Button> */}
        <Button title="Create Room" 
          // onPress={createRoom }
          onPress={handleCreateRoom}
          // onPress={createRoom}
          >
             <Button title="Join Room" onPress={() => history.push("/joinroom")}></Button>
          </Button>

      </View>

      <Footer />
    </View>
 )};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf2',
    flexDirection: 'column',
  }

})

