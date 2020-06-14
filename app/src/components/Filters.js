import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Slider,TouchableOpacity } from 'react-native';
import { Input, Button, CheckBox, Overlay } from 'react-native-elements'
import { Container } from 'native-base';
import Header from './Header';
import Footer from './Footer';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import { AppLoading } from 'expo';

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
        <View style={{alignItems: 'stretch', justifyContent: 'center', height:40}}>
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

      if (!fontsLoaded) {
        return <AppLoading />;
      } else {

      return (
        <View style={{height:40}}>
        <Input style={styles.input} placeholder="Enter a location" onChangeText={text => setFilters({...filters, area: text.toLowerCase().trim()})} />
        </View>
      )
    }
  }
}
  return (

    <Container style={styles.container}>
      <Header />
        <View style={styles.filters}>
          <View style={{width:300, height:530, justifyContent:'space-between', }}>
            <View>
            <View>
              <Picker
              style={{}}
                selectedValue={filters.searchType}
                onValueChange={currentType => setFilters({...filters, searchType: currentType})} >
                <Picker.Item label="Search Nearby" value="nearby" />
                <Picker.Item label="Search by Area" value="text" />
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
            <TouchableOpacity onPress={toggleOverlay} style={{borderRadius: 10,}}>
              <Text style={{fontSize: 18, alignSelf: 'flex-end', color:'#ee937c', fontWeight: '500'}}>More Filters</Text>
            </TouchableOpacity>
            </View>
            
          
            <View >
              <Input style={{height:40}}placeholder="Host Name" onChangeText={text => setNickname(text.trim())} value={nickname} ></Input>

              <TouchableOpacity onPress={handleCreateRoom} style={{backgroundColor: '#ee937c', borderRadius: 10,}}>
                <Text style={{fontSize: 30, alignSelf: 'center', color:'#fcfaf2', fontWeight: '700', paddingVertical:1 }}>Start Deciding!</Text>
              </TouchableOpacity>
            </View>
          
            
        
          </View>

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
    margin:50,
    
  
  },
  input: {
    // flex: 1
  },
  button: {
    // marginBottom: 5
  }
});