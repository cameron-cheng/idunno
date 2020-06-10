import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, Slider } from 'react-native';
import { Input, Button, CheckBox, Overlay } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Filters(props){
  const [state, setState] = useState({
    visible: false,
    searchType: 'nearby',
    type: 'restaurant',
    area: null,
    radius: 500,
    price: 1,
    vegan: false,
    familyFriendly: false
  }) 

  function handleSubmit() {
    console.log(state)  
  }

  function toggleOverlay() {
    setState({...state, visible: !state.visible});
  }

  function renderSearchType() {
    if (state.searchType === "nearby") {
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
          <Picker.Item label="Search Nearby" value="nearby" />
          <Picker.Item label="Search by Area" value="text" />
        </Picker>
      </View>

      <View style={{ flex: 2 }}>
        <Input style={styles.input} placeholder="Type" onChangeText={text => setState({...state, type: text})} />

        {renderSearchType()}

        <View style={{ flex: 1.5, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            minimumValue='0'
            maximumValue='4'
            value={(state.price)} 
            onValueChange={value => setState({...state, price: Math.ceil(value)})} />
          <Text>Price: {'$'.repeat(Math.ceil(state.price)) || 'Free'}</Text>
        </View>
      </View>

      <Overlay overlayStyle={{ height: SCREEN_HEIGHT / 1.85 }} isVisible={state.visible} onBackdropPress={toggleOverlay}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <CheckBox 
            title='Vegan'
            checked={state.vegan}
            onPress={() => setState({...state, vegan: !state.vegan})}
          />
          <CheckBox
            title='Family-Friendly'
            checked={state.familyFriendly}
            onPress={() => setState({...state, familyFriendly: !state.familyFriendly})}
          />
          <CheckBox 
            title='Vegan'
            checked={state.vegan}
            onPress={() => setState({...state, vegan: !state.vegan})}
          />
          <CheckBox
            title='Family-Friendly'
            checked={state.familyFriendly}
            onPress={() => setState({...state, familyFriendly: !state.familyFriendly})}
          />
          <CheckBox 
            title='Vegan'
            checked={state.vegan}
            onPress={() => setState({...state, vegan: !state.vegan})}
          />
          <CheckBox
            title='Family-Friendly'
            checked={state.familyFriendly}
            onPress={() => setState({...state, familyFriendly: !state.familyFriendly})}
          />
        </View>
      </Overlay>

      <Button raised buttonStyle={styles.button} title="Extra Parameters" onPress={toggleOverlay} />
      <Button raised buttonStyle={styles.button} title="Create Room!" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: SCREEN_WIDTH - 60,
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#eef'
  },
  input: {
    flex: 1
  },
  button: {
    marginBottom: 25
  }
});