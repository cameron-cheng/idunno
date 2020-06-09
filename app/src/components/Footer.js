import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Footer, FooterTab, Button, Left, Right, Icon, Title } from 'native-base';
import { State } from 'react-native-gesture-handler';
// import LottieView from 'lottie-react-native'
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function LobbyFooter(props) {
  return (
    <View style={style.container}>
       <Footer style={style.footer}>
          <FooterTab style={style.footerTab}>
            <Button transparent >
              <Icon style={style.icon} type='AntDesign' name="search1" />
            </Button>
            <Button transparent 
            style={{justifyContent: 'center', alignSelf: 'center'}}
            // onPress={() => history.push("/sessions")}
            >
              <Icon style={style.iconPlus} type='AntDesign' active name="pluscircleo" />
            </Button>
            <Button transparent>
              <Icon style={style.icon} type='AntDesign' name="user" />
            </Button>
          </FooterTab>
        </Footer>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    // flex: 1,
    width: SCREEN_WIDTH,
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: '#fcfaf2'
    // height: 
  },
  footer: {
    backgroundColor: '#2a9d8f',
    // justifyContent: 'center',
    height: 80,
    alignSelf: 'center',
    // shadowColor: '#988a55',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
  },
  footerTab: {
    // justifyContent:'center',
    // alignSelf: 'center',
  },
  body: {
    // flex: 1,
    // justifyContent: 'center' 
  },
  icon: {
    color: '#fcfaf2',
    // alignSelf: 'center',
  },
  iconPlus: {
    color: '#fcfaf2',
    height: 65,
    padding: 0,
    fontSize: 60,
    // alignSelf: 'center',
  },
})