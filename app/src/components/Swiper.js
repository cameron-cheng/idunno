import { API_KEY } from 'react-native-dotenv'
import mode from '../helpers/mode'

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  PanResponder
} from "react-native";
import { Redirect } from 'react-router-native'
import { List, ListItem, Card, CardItem, Header, Body } from 'native-base'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

// const Users = [
// {id: '1', title: "Dark Knight", reviews: "5/5", theatre: "Vancouver", genre: "Action/Adventure", uri: require('../assets/feed_images/1.jpg')},
// {id: '2', title: "Jungle Book", reviews: "3/5", theatre: "Coquitlam", genre: "Adventure/Fantasy", uri: require('../assets/feed_images/2.jpg')},
// {id: '3', title: "Avengers", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/3.jpg')},
// {id: '4', title: "Hunger Games", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/4.jpg')},
// {id: '5', title: "Moana", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/5.jpg')},
// {id: '6', title: "Jurassic World", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/6.jpg')},
// {id: '7', title: "Glass", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/7.jpg')},
// {id: '8', title: "Dawn of the Planet of the Apes", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/8.jpg')},
// {id: '9', title: "Jaws", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/9.jpg')},
// {id: '10', title: "Dark Knight", reviews: "5/5", theatre: "Langley", genre: "Action/Adventure", uri: require('../assets/feed_images/1.jpg')},
// {id: '11', title: "Jungle Book", reviews: "3/5", theatre: "Richmond", genre: "Adventure/Fantasy", uri: require('../assets/feed_images/2.jpg')},
// ]

export default class App extends Component {
  
  constructor(props){
    super(props)
    console.log("4: PROPS:", this.props.places.length)
    this.places = this.props.places

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      likes: [],
      dislikes: []
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
    ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })
  }

  UNSAFE_componentWillMount() {

    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder:(evt, gestureState) => true,
      onPanResponderMove:(evt, gestureState) => {
        this.position.setValue({ x:gestureState.dx, y:gestureState.dy })
      },
      onPanResponderRelease:(evt, gestureState) => {

        //swipe right animation
        if (gestureState.dx > 200) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy}
          }).start(() => {          
              this.props.addToResults(this.places[this.state.currentIndex].place_id)
              this.setState({ currentIndex: this.state.currentIndex + 1, likes: [...this.state.likes, this.places[this.state.currentIndex].place_id]}, () => {
              this.position.setValue({ x: 0, y: 0 })
              console.log('LIKES :>> ', this.state.likes);
            })
          })

        //swipe left animation
        } else if (gestureState.dx <  -200) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy}
           }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1, dislikes: [...this.state.dislikes, this.places[this.state.currentIndex].place_id]}, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })

        //spring back to middle if not swiped far enough    
        } else { 
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }


  renderCards = () => {

    return this.places.map((item, index) => {

      //no cards left
      if (index < this.state.currentIndex) {
        return null

        //top card
      } else if (index === this.state.currentIndex) {
        return(
          <Animated.View 
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate,
            { height: SCREEN_HEIGHT - 200, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]} >

            {/* Card header */}
            <Animated.View style={{width: SCREEN_WIDTH, padding:10, position: 'absolute',zIndex:1000}}>
              <View style={{backgroundColor: '#f0f0f0', borderTopRightRadius:20, borderTopLeftRadius:20, height: 50, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>{item.name}</Text>
              </View>
            </Animated.View>

            {/* Card footer */}
            <Animated.View style={{width: SCREEN_WIDTH, padding:10, position: 'absolute', bottom:0, zIndex:1000}}>
              <View style={{backgroundColor: '#f0f0f0', borderBottomRightRadius:20, borderBottomLeftRadius:20, height: 200, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>Address: {item.formatted_address}</Text>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>Rating: {item.rating}</Text>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>Price Level: {item.price_level}</Text>
              </View>
            </Animated.View>

            {/* Card "LIKE" icon */}
              <Animated.View style={{opacity: this.likeOpacity, transform: [{rotate: "-30deg" }], position: "absolute", top: 80, left: 40, zIndex:1000}}>
                <Text style={{borderWidth: 1, borderColor: "green", color: "green", fontSize: 32, fontWeight:"800", padding: 10}}>YUP!</Text>
              </Animated.View >

            {/* Card "DISLIKE" icon */}
              <Animated.View style={{opacity:this.dislikeOpacity, transform: [{rotate: "30deg" }], position: "absolute", top: 80, right: 40, zIndex:1000}}>
                <Text style={{borderWidth: 1, borderColor: "red", color: "red", fontSize: 32, fontWeight:"800", padding: 10}}>NOPE!</Text>
              </Animated.View>
              <Image 
                style={{flex:1, height:null, width:null, resizeMode: 'cover', borderRadius: 20}}
                source={{
                  uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photos[0].photo_reference}&maxheight=400`
                }}
              />
            </Animated.View>
        )

        // cards underneath
      } else {
        return(
          <Animated.View 
          {...this.PanResponder.panHandlers}
          key={item.id} style={[{
            opacity: this.nextCardOpacity,
            transform: [{ scale: this.nextCardScale }],
            height: SCREEN_HEIGHT - 200, 
            width: SCREEN_WIDTH, 
            padding: 10, 
            position: 'absolute'
            }]} >
              {/* Card header - shoudl be same styled as "top card" */}
            <Animated.View style={{width: SCREEN_WIDTH, padding:10, position: 'absolute',zIndex:1000}}>
              <View style={{backgroundColor: '#f0f0f0', borderTopRightRadius:20, borderTopLeftRadius:20, height: 50, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>{item.name}</Text>
              </View>
            </Animated.View>

            {/* Card footer - should be styled same as "top card"*/}
            <Animated.View style={{width: SCREEN_WIDTH, padding:10, position: 'absolute', bottom:0, zIndex:1000}}>
              <View style={{backgroundColor: '#f0f0f0', borderBottomRightRadius:20, borderBottomLeftRadius:20, height: 200, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>Address: {item.formatted_address}</Text>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>Rating: {item.rating}</Text>
                <Text style={{alignSelf: 'center', color:"grey", fontSize: 25}}>Price Level: {item.price_level}</Text>
              </View>
            </Animated.View>
            <Image 
              style={{flex:1, height:null, width:null, resizeMode: 'cover', borderRadius: 20}}
              source={{
                uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photos[0].photo_reference}&maxheight=400`
              }}
            />
          </Animated.View>
        )
      }
    }).reverse()
  }
  
  render() {
    //once the current index equals the data length (the stack is done), calculate what the most popular element in the array is
    if (this.state.currentIndex >= this.places.length) {
      this.props.readyForResult();

      return <Redirect to={{
        pathname: '/results'
      }} />
    }
    return (
      <View>
        <View style={{ height: 40 }}>

        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
        {this.renderCards()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});