import React from 'react';
import QRCode  from 'react-native-qrcode-svg';
import { View, Text, Button, StyleSheet, TouchableOpacity, Share  } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import ShareCode from './Share'
import Header from './Header';
import Footer from './Footer'


export default ({ history }) => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Session Code: YZXN',
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

  return(
<View style={styles.container}>
  <Header />
  <View style={{flex: 1, justifyContent: 'space-between'}}>
    <View style={{flexDirection: 'row'}}>
      <Button title="Homepage" onPress={() => history.push("/")}></Button>
      <Button title="Lobby" onPress={() => history.push("/lobby")}></Button>
    </View>
      
      <Content style={styles.content}>  
        <Card style={styles.card}>
          <Card style={styles.cardCode}>
            <View>
              <View style={styles.QR}><QRCode value="http://www.google.com"/>
              </View>
            </View>
          </Card>
          <TouchableOpacity onPress={onShare} style={styles.share}>
            <Text style={styles.shareText}>SHARE</Text>
          </TouchableOpacity>
        </Card>
      </Content>
    </View>
  <Footer />
  </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf2',
    flexDirection: 'column',
    // justifyContent: 'center',
  },
  content: {
    padding: 10,
  },
  card: {
    // flex:1,
    borderRadius: 20,
    height: 400,
    alignItems: 'center',
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
  },
  cardCode: {
    // flex:1,
    backgroundColor: '#fcfaf2',
    borderRadius: 20,
    alignItems: 'center',

    backgroundColor: '#f9f1dc',
    
  },
  share: {
    backgroundColor:'#ee937c',  
    borderRadius: 10 
  },
  shareText: {
    color:'#fcfaf2',
    fontSize: 36, fontWeight: '700', 
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  QR: {
    paddingHorizontal: 100,
    paddingVertical: 50,
    // backgroundColor: '#fcfaf2'
  }

})