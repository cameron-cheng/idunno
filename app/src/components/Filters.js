import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Slider } from 'react-native';
import { Input, Button, CheckBox, Overlay } from 'react-native-elements'
import { Container } from 'native-base';
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
    props.history.push('/invitation');
  }

  function toggleOverlay() {
    setVisible(!visible);
  }

  function renderSearchType() {
    if (filters.searchType === "nearby") {
      return (
        <View style={{ flex: 1.69, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            minimumValue='500'
            maximumValue='2000'
            step='10'
            value={filters.radius} 
            onValueChange={value => setFilters({...filters, radius: value})} />
          <Text>Radius: {filters.radius}m</Text>
        </View>
      )
    } else {
      return (
        <Input style={styles.input} placeholder="Area Name" onChangeText={text => setFilters({...filters, area: text.toLowerCase().trim()})} />
      )
    }
  }

  return (

    <Container style={styles.container}>
      <Header />
        <View style={styles.filters}>
          <View style={{ flex: 3 }}>
            <Picker
              selectedValue={filters.searchType}
              onValueChange={currentType => setFilters({...filters, searchType: currentType})} >
              <Picker.Item label="Search Nearby" value="nearby" />
              <Picker.Item label="Search by Area" value="text" />
            </Picker>
          </View>

          <View style={{ flex: 2.5 }}>
            {/* <Input style={styles.input} placeholder="Type" onChangeText={text => setFilters({...filters, type: text.toLowerCase().trim()})} /> */}

            {renderSearchType()}

            <View style={{ flex: 2, alignItems: 'stretch', justifyContent: 'center' }}>
              <Slider
                minimumValue='0'
                maximumValue='4'
                value={(filters.price)} 
                onValueChange={value => setFilters({...filters, price: Math.ceil(value)})} />
              <Text>Price: {'$'.repeat(Math.ceil(filters.price)) || 'Free'}</Text>
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


          <Button raised buttonStyle={styles.button} title="Extra Parameters" onPress={toggleOverlay} />

          <Input placeholder="Nickname" onChangeText={text => setNickname(text.trim())} value={nickname} ></Input>
          <Button raised buttonStyle={styles.button} title="Create Room!" onPress={handleCreateRoom} />

        </View>
      <Footer />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: '#fcfaf2',
  },
  filters: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 60,
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  input: {
    flex: 1
  },
  button: {
    marginBottom: 5
  }
});