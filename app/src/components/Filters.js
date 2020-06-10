import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Slider } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Filters(props){
  const [state, setState] = useState({
    searchType: null,
    area: null,
    type: 'restaurant',
    radius: 500,
    price: 1,
    clicked: false
  }) 

  function handleSubmit() {
    console.log(state)  
  }

  function renderSearchType() {
    if (state.searchType === "Nearby") {
      return (
        <View style={{ flex: 1.27, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            minimumValue='500'
            maximumValue='2000'
            step='10'
            value={state.radius} 
            onValueChange={value => setState({...state, radius: value})} />
          <Text>Radius: {state.radius}m</Text>
        </View>
      )
    } else {
      return (
        <Input style={styles.input} placeholder="Area Name" onChangeText={text => setState({...state, area: text})} />
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1.5 }}>
        <Picker
          selectedValue={state.searchType}
          onValueChange={currentType => setState({...state, searchType: currentType})} >
          <Picker.Item label="Search Nearby" value="Nearby" />
          <Picker.Item label="Search by Area" value="Text" />
        </Picker>
      </View>

      <View style={{ flex: 2 }}>
        <Input style={styles.input} placeholder="Type" onChangeText={text => setState({...state, type: text})} />

        {renderSearchType()}

        <View style={{ flex: 1.5, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            minimumValue='0'
            maximumValue='4'
            value={(Math.floor(state.price))} 
            onValueChange={value => setState({...state, price: value})} />
          <Text>Price: {'$'.repeat(Math.floor(state.price)) || 'Free'}</Text>
        </View>
      </View>
      {/* <CheckBox
        center
        title='Click Here'
        checked={state.checked}
        onPress={() => setState({...state, checked: !state.checked})}
      /> */}
      <Button raised style={styles.button} title="Create Room!" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: SCREEN_WIDTH - 40,
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#eef'
  },
  button: {
    // flex: 2
    marginBottom: 20,
  },
  input: {
    flex: 1
  }
});