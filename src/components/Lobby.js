import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Header, Body, Button } from 'native-base';
import { State } from 'react-native-gesture-handler';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Lobby(props) {
  // const [ready, setReady] = useState(false)
  // console.log("PROPS", props)

  function onReady() {
    if (ready) {
      setReady(false)
    } else {
      setReady(true)
    }
  }
  
  //just to see if it's working 
  // function change() {
  //   if (ready) {
  //     return(<Text>TRUE</Text>)
  //   } else {
  //     return(<Text>FALSE</Text>)
  //   }
  // }
  // const changeBool = change();
  //
  
  return(  
    <Container style={styles.container}>
      <Header />
      <Content style={styles.content}>
        <Card style={styles.card}>
          <CardItem header style={styles.header}>
            <Text style={styles.text}>Ready to start deciding?</Text>
          </CardItem>
          <CardItem >
            <Body style={styles.body}>
              <Text style={styles.text}>
                Waiting for decision makers...
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Button rounded success 
                  onPress={(event) => props.handleReady(event)}
                  // onChange={(event) => props.onChange(event.target.value)}
                  style={styles.button}>
                    <Text style={styles.buttonText}>Ready</Text>
                </Button>
                
                <Button rounded danger style={styles.button}>
                  <Text style={styles.buttonText}>Not Ready</Text>
                </Button>
              </View>
              <View>
                {/* {changeBool} */}
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
      
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    
    
  },
  content: {
    padding: 10,
    top: 100,
  },
  card: {
    borderRadius: 20,
    height: 400,
    alignItems: 'center'
  },
  header: {
    borderTopLeftRadius:20, 
    borderTopRightRadius:20,
  },
  text: {
    fontSize: 25
  },
  body: {
    alignItems: 'center',
    top: 60
  },
  button: {
    paddingLeft: 20, 
    paddingRight: 20,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
  
})