import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Route, Redirect } from 'react-router-native';
import { Footer, FooterTab, Button, Left, Right, Icon, Title } from 'native-base';
import { State } from 'react-native-gesture-handler';

// import LottieView from 'lottie-react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default ({ history }) => {

  const [redirectHome, setRedirectHome] = useState(false)
  
  if (redirectHome) {
    return <Redirect to='/' />
  }

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.body}>
          <Button transparent style={{justifyContent: 'center', alignSelf: 'center'}} onPress={() => setRedirectHome(true)}>
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
    bottom: -370,
    alignSelf: 'center',
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start' ,
    paddingTop: 20,
    position: 'relative'
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
  },



////HOME PAGE STYLES DO NOT DELETE!!!!
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   shadowColor: '#ae9f77',
  //   shadowOffset: { width: 0, height: -4 },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },
  // footer: {
  //   backgroundColor: '#2a9d8f',
  //   justifyContent: 'flex-start',
  //   height: 800,
  //   width: 1500,
  //   bottom: -440,
  //   alignSelf: 'center',
  //   borderTopLeftRadius: 1000,
  //   borderTopRightRadius: 1000,
  // },
  // body: {
  //   flex: 1,
  //   justifyContent: 'flex-start' ,
  //   paddingTop: 20
  // },
  // icon: {
  //   color: '#fcfaf2',
  //   height: 30,
  //   alignSelf: 'center',
  // },
  // iconPlus: {
  //   color: '#fcfaf2',
  //   height: 65,
  //   fontSize: 60,
  // },

})