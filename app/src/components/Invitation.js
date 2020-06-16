import React from 'react';
import QRCode  from 'react-native-qrcode-svg';
import { View, Text, Button, StyleSheet, TouchableOpacity, Share, Dimensions  } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import Header from './Header';
import Footer from './Footer'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default Invitation = ({roomId, history}) => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `iDUNNO Session Code: ${roomId}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const goToLobby = () => {
    history.push("/room");
  }
 

  return(
    <Container style={{flex: 1,}}>
      <Header/>
      <View style={{flex: 5.30, width: 350, top: 20, height: 590,justifyContent: 'center',alignSelf: 'center'}}>
        <Card style={styles.cardMain}>
          <Card style={styles.cardCode}>
          <View style={{}}>
            <View style={{width: 300, height: 280, justifyContent:'space-evenly'}}>
              <Text style={{alignSelf:'center', color: "#09413a", fontWeight: '500', fontSize: 15, fontFamily: 'Futura',top: 13, fontFamily: 'Avenir'}}>YOUR DECISION CODE IS...</Text>
              <Text style={styles.QRText}>{roomId}</Text> 
              <View style={styles.QR}>
                <QRCode value="http://www.google.com"/>
              </View>
            </View>
          </View>
            {/* <Text style={{alignSelf: 'center'}}>HI</Text> */}
          </Card>
          <View style={{paddingTop:20, height: 150, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={onShare} style={styles.share}>
            <Text style={styles.shareText}>SHARE CODE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToLobby} style={styles.share}>
            <Text style={styles.shareText}>CONTINUE TO LOBBY</Text>
          </TouchableOpacity>
          </View>
        </Card>
      </View>
      <Footer />
    </Container>
  )};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fcfaf2',
    // flex: 1, 
    padding: 20,  
    alignItems: 'center',
  },
  content: {
    // flex:1,
    // padding: 10,
    // justifyContent: 'center'
  },
  cardMain: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardCode: {
    backgroundColor: '#fcfaf2',
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#fcfaf2',
    shadowOpacity: 0.0,
    width: 300,
   
    
  },
  share: {
    backgroundColor:'#ee937c',  
    borderRadius: 10,
  },
  shareText: {
    color:'#fcfaf2',
    fontSize: 20, 
    // fontWeight: '700', 
    paddingHorizontal: 20, 
    paddingVertical: 10,
    alignSelf: 'center',
    fontFamily: 'GillSans-Light',
    fontWeight: '800'
  },
  QR: {
    
    alignSelf: 'center',
  },
  QRText: {
    alignSelf: 'center',
    // padding: 20,
    fontSize: 80,
    fontWeight: '900',
    color: '#2a9d8f',
    fontFamily: 'Avenir'
  }


})
