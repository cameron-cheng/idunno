import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Footer, FooterTab, Button, Left, Right, Icon, Title } from 'native-base';
import { State } from 'react-native-gesture-handler';

// import LottieView from 'lottie-react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default ({ history }) => {
  const onPressPlus = () => history.push('/room')

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.body}>
          <Button transparent style={{justifyContent: 'center', alignSelf: 'center'}} onPress={onPressPlus}>
            <Icon style={styles.iconPlus} type='FontAwesome' active name="home" />
          </Button>
        </View> 
      </View>
    </View>


    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: SCREEN_WIDTH,
    // justifyContent:'center',
    // alignItems: 'center',
    // backgroundColor: '#fcfaf2'
    // height: 10,
    justifyContent: 'center',
    shadowColor: '#ae9f77',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  footer: {
    backgroundColor: '#2a9d8f',
    justifyContent: 'flex-start',
    height: 800,
    width: 1500,
    bottom: -440,
    alignSelf: 'center',
    // shadowColor: '#988a55',
    // shadowOffset: { width: -4, height: -4 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start' ,
    paddingTop: 30
  },
  icon: {
    color: '#fcfaf2',
    height: 30,
    alignSelf: 'center',
  },
  iconPlus: {
    color: '#fcfaf2',
    height: 65,
    fontSize: 60,
    // alignSelf: 'center',

  },

})