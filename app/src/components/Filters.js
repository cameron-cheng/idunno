import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Slider,TouchableOpacity } from 'react-native';
import { Input, Button, CheckBox, Overlay } from 'react-native-elements'
import { Container, Card } from 'native-base';
import Header from './Header';
import Footer from './Footer';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;




export default function Filters(props){

  

  const [visible, setVisible] = useState(false)
  const [nickname, setNickname] = useState('')
  const { filters, setFilters } = props

  const handleCreateRoom = () =>{
    props.createRoom(nickname);
  }

  if (props.redirectInvitation) {
    props.history.push('/invitation');
  }
  
  function toggleOverlay() {
    setVisible(!visible);
  }

  function renderSearchType() {
    if (filters.searchType === "nearby") {
      return (
        <View style={{alignItems: 'stretch', justifyContent: 'center', height:40, top: -30}}>
          <Slider
            minimumValue='500'
            maximumValue='2000'
            step='10'
            value={filters.radius} 
            onValueChange={value => setFilters({...filters, radius: value})} />
          <Text style={{paddingVertical: 15}}>Radius: {filters.radius}m</Text>
        </View>
      )
    } else {

      return (
        <View style={{alignItems: 'stretch', justifyContent: 'center', height:40, top: -30}}>
        <Input style={styles.input} placeholder="Enter a location" onChangeText={text => setFilters({...filters, area: text.toLowerCase().trim()})} />
        </View>
      )
    
  }
}
  return (

    <Container style={styles.container}>
      <Header />
      
        <View style={styles.filters}>
        <Card style={styles.card}>
          <View style={{width:300, justifyContent:'space-between', }}>
            <View style={{justifyContent: 'center'}}>
            <View>
              <Picker
              style={{top: -30}}
                selectedValue={filters.searchType}
                onValueChange={currentType => setFilters({...filters, searchType: currentType})} >
                <Picker.Item label="Search Nearby" value="nearby" />
                <Picker.Item label="Search by Location" value="text" />
              </Picker>
            </View>
            {renderSearchType()}
            <View style={{ alignItems: 'stretch', paddingVertical:20,justifyContent: 'center' }}>
              <Slider
                minimumValue='0'
                maximumValue='4'
                value={(filters.price)} 
                onValueChange={value => setFilters({...filters, price: Math.ceil(value)})} />
              <Text>Price: {'$'.repeat(Math.ceil(filters.price)) || 'Free'}</Text>
            </View>
            <TouchableOpacity onPress={toggleOverlay} style={{top: -10}}>
              <Text style={{fontSize: 18, alignSelf: 'flex-end', color:'#ee937c', fontWeight: '500'}}>More Filters</Text>
            </TouchableOpacity>
            </View>
            
          
            <View style={{justifyContent: 'center', top: 20}}>
              <Input style={{height:40}}placeholder="Host Name" onChangeText={text => setNickname(text.trim())} value={nickname} ></Input>

              <TouchableOpacity onPress={handleCreateRoom} style={styles.button}>
                <Text style={styles.buttonText}>START DECIDING!</Text>
              </TouchableOpacity>
            </View>
            </View>
            </Card>
          <Overlay overlayStyle={{ height: 470 }} isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <CheckBox 
                title='Vegan'
                checked={filters.vegan}
                onPress={() => setFilters({...filters, vegan: !filters.vegan})}
              />
              <CheckBox
                title='Family-Friendly'
                checked={filters.family}
                onPress={() => setFilters({...filters, family: !filters.family})}
              />
              <CheckBox
                title='Casual Dining'
                checked={filters.casual}
                onPress={() => setFilters({...filters, casual: !filters.casual})}
              />
              <CheckBox 
                title='Fine Dining'
                checked={filters.fine}
                onPress={() => setFilters({...filters, fine: !filters.fine})}
              />
              <CheckBox 
                title='Café'
                checked={filters.cafe}
                onPress={() => setFilters({...filters, cafe: !filters.cafe})}
              />
              <CheckBox
                title='Buffet'
                checked={filters.buffet}
                onPress={() => setFilters({...filters, buffet: !filters.buffet})}
              />
              <CheckBox 
                title='Bistro'
                checked={filters.bistro}
                onPress={() => setFilters({...filters, bistro: !filters.bistro})}
              />
              <CheckBox
                title='Breakfast'
                checked={filters.breakfast}
                onPress={() => setFilters({...filters, breakfast: !filters.breakfast})}
              />
            </View>
          </Overlay>
        
        </View>
      <Footer />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex:5,
    // width: SCREEN_WIDTH,
    backgroundColor: '#fcfaf2',
    // flex: 1, 
    padding: 20,  
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  filters: {
    
    flexDirection: 'column',
    justifyContent: 'center',
    // paddingHorizontal: 60,
    // paddingBottom: 20,
    // backgroundColor: '#fff',
    margin:40,
    
  
  },
  input: {
    // flex: 1
  },
  button: {
    backgroundColor:'#ee937c', 
    padding: 10, 
    borderRadius: 10,
    width: 200,
    shadowColor: '#ae9f77',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 10,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20, 
    color: '#fcfaf2', 
    fontWeight: '800',
    alignSelf: 'center',
  },
  card: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
    justifyContent: 'space-between',
    width: 325,
    height: 540,
    top: 18
  }
});