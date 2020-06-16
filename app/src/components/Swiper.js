import { API_KEY } from "react-native-dotenv";

import Countdown from "../components/Countdown";

import HeaderNav from "./Header";
import Footer from "./Footer";

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import { Rating } from "react-native-ratings";
import { Redirect } from "react-router-native";
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
} from "native-base";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

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
  constructor(props) {
    super(props);

    this.places = this.props.places;

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      likes: [],
      dislikes: [],
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }

  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        //swipe right animation
        if (gestureState.dx > 200) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.props.addToResults(
              this.places[this.state.currentIndex].place_id
            );
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1,
                likes: [
                  ...this.state.likes,
                  this.places[this.state.currentIndex].place_id,
                ],
              },
              () => {
                this.position.setValue({ x: 0, y: 0 });
                console.log("LIKES :>> ", this.state.likes);
              }
            );
          });

          //swipe left animation
        } else if (gestureState.dx < -200) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1,
                dislikes: [
                  ...this.state.dislikes,
                  this.places[this.state.currentIndex].place_id,
                ],
              },
              () => {
                this.position.setValue({ x: 0, y: 0 });
              }
            );
          });

          //spring back to middle if not swiped far enough
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }

  renderCards = () => {
    // <Container>
    //   <View>
    //     <DeckSwiper dataSource={this.places}
    //       renderItem={item =>
    //       <Card>
    //         <CardItem>
    //           <Left>
    //             <Thumbnail source={{uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photos[0].photo_reference}&maxheight=400`}} />
    //             <Body>
    //               <Text>{item.address}</Text>
    //             </Body>
    //           </Left>
    //         </CardItem>
    //       </Card>

    //       }
    //     />

    //   </View>
    // </Container>

    return this.places
      .map((item, index) => {
        //no cards left
        if (index < this.state.currentIndex) {
          return null;

          //top card
        } else if (index === this.state.currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id}
              style={[
                this.rotateAndTranslate,
                {
                  height: SCREEN_HEIGHT - 200,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <Animated.View
                style={{
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <View style={{}}>
                  <Card style={styles.card}>
                    <View>
                      {/* Top Card Title/Rating */}
                      <Text
                        style={{
                          alignSelf: "flex-start",
                          color: "#09413a",
                          fontSize: 25,
                          padding: 20,
                          paddingLeft: 20,
                          paddingBottom: 0,
                          fontFamily: 'Avenir'
                        }}
                      >
                        {item.name}
                      </Text>
                      <Rating
                        type="custom"
                        startingValue={item.rating}
                        imageSize={40}
                        ratingTextColor="black"
                        ratingColor="#ee937c"
                        ratingBackgroundColor="#CCCBCA"
                        style={{
                          padding: 10,
                          paddingLeft: 20,
                          paddingBottom: 20,
                          alignSelf: "flex-start",
                        }}
                      />
                    </View>

                    {/* Top Card Image */}
                    <View style={{ alignItems: "center" }}>
                      <Image
                        style={{
                          height: 300,
                          width: "90%",
                          resizeMode: "cover",
                          borderRadius: 10,
                        }}
                        source={{
                          uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photos[0].photo_reference}&maxheight=400`,
                        }}
                      />
                    </View>

                    {/* Top Card details */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        paddingVertical: 15,
                        top: -20
                      }}
                    >
                      <View
                        style={{
                          padding: 8,
                          paddingLeft: 20,
                          height: 120,
                          flexDirection: "column",
                          justifyContent: "space-around",
                        }}
                      >
                        <Icon
                          type="MaterialIcons"
                          name="location-on"
                          style={{
                            fontSize: 25,
                            width: 25,
                            alignSelf: "center",
                            color: "#2a9d8f",
                          }}
                        ></Icon>
                        <Icon
                          type="AntDesign"
                          name="clockcircle"
                          style={{
                            fontSize: 20,
                            width: 21,
                            alignSelf: "center",
                            color: "#2a9d8f",
                          }}
                        ></Icon>
                        {/* <Icon
                          type="FontAwesome"
                          name="dollar"
                          style={{
                            fontSize: 20,
                            width: 12,
                            alignSelf: "center",
                            color: "#2a9d8f",
                          }}
                        ></Icon> */}
                      </View>
                      <View
                        style={{
                          flex: 1,
                          padding: 10,
                          height: 120,
                          justifyContent: "space-around",
                        }}
                      >
                        <Text style={{ alignSelf: "flex-start", fontSize: 15, fontFamily: 'Avenir' }}>
                          {item.formatted_address || item.vicinity}
                        </Text>
                        <Text style={{ alignSelf: "flex-start", fontSize: 15, fontFamily: 'Avenir' }}>
                          Open Now
                        </Text>
                        {/* <Text style={{ alignSelf: "flex-start", fontSize: 15, fontFamily: 'Avenir' }}>
                          Price Level: {item.price_level}
                        </Text> */}
                      </View>
                    </View>
                  </Card>
                </View>
              </Animated.View>

              {/* Card "LIKE" icon */}
              <Animated.View
                style={{
                  opacity: this.likeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 160,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Icon
                  type="Entypo"
                  name="thumbs-up"
                  style={{ color: "#2a9d8f", fontSize: 150 }}
                ></Icon>
              </Animated.View>

              {/* Card "DISLIKE" icon */}
              <Animated.View
                style={{
                  opacity: this.dislikeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 160,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Icon
                  type="Entypo"
                  name="thumbs-down"
                  style={{ color: "#e76f51", fontSize: 150 }}
                ></Icon>
              </Animated.View>
            </Animated.View>
          );

          // cards underneath
        } else {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT - 200,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              {/* Card header - shoudl be same styled as "top card" */}
              <Animated.View
                style={{
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <View style={{}}>
                  <Card style={styles.card}>
                    <View>
                      {/* Underneath Title/Rating */}
                      <Text
                        style={{
                          alignSelf: "flex-start",
                          color: "#09413a",
                          fontSize: 25,
                          padding: 20,
                          paddingLeft: 20,
                          paddingBottom: 0,
                          fontFamily: 'Avenir'
                        }}
                      >
                        {item.name}
                      </Text>
                      <Rating
                        type="custom"
                        startingValue={item.rating}
                        imageSize={40}
                        ratingTextColor="black"
                        ratingColor="#ee937c"
                        ratingBackgroundColor="#CCCBCA"
                        style={{
                          padding: 10,
                          paddingLeft: 20,
                          paddingBottom: 20,
                          alignSelf: "flex-start",
                        }}
                      />
                    </View>

                    {/* Underneath Image */}
                    <View style={{ alignItems: "center" }}>
                      <Image
                        style={{
                          height: 300,
                          width: "90%",
                          resizeMode: "cover",
                          borderRadius: 10,
                        }}
                        source={{
                          uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photos[0].photo_reference}&maxheight=400`,
                        }}
                      />
                    </View>

                    {/* Underneath details */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        paddingVertical: 15,
                        top: -20
                      }}
                    >
                      <View
                        style={{
                          padding: 8,
                          paddingLeft: 20,
                          height: 120,
                          flexDirection: "column",
                          justifyContent: "space-around",
                        }}
                      >
                        <Icon
                          type="MaterialIcons"
                          name="location-on"
                          style={{
                            fontSize: 25,
                            width: 25,
                            alignSelf: "center",
                            color: "#2a9d8f",
                          }}
                        ></Icon>
                        <Icon
                          type="AntDesign"
                          name="clockcircle"
                          style={{
                            fontSize: 20,
                            width: 21,
                            alignSelf: "center",
                            color: "#2a9d8f",
                          }}
                        ></Icon>
                        {/* <Icon
                          type="FontAwesome"
                          name="dollar"
                          style={{
                            fontSize: 20,
                            width: 12,
                            alignSelf: "center",
                            color: "#2a9d8f",
                          }}
                        ></Icon> */}
                      </View>
                      <View
                        style={{
                          flex: 1,
                          padding: 10,
                          height: 120,
                          justifyContent: "space-around",
                        }}
                      >
                        <Text style={{ alignSelf: "flex-start", fontSize: 15,fontFamily: 'Avenir' }}>
                          {item.formatted_address || item.vicinity}
                        </Text>
                        <Text style={{ alignSelf: "flex-start", fontSize: 15, fontFamily: 'Avenir' }}>
                          Open Now
                        </Text>
                        {/* <Text style={{ alignSelf: "flex-start", fontSize: 15, fontFamily: 'Avenir' }}>
                          Price Level: {item.price_level}
                        </Text> */}
                      </View>
                    </View>
                  </Card>
                </View>
              </Animated.View>
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  render() {
    return (
      <View>
        <HeaderNav />
        <View style={{ height: 60, width: 180, top: 30, alignSelf: "center" }}>
          {/* <Countdown readyForResult={this.props.readyForResult} /> */}
        </View>
        <View style={{ flex: 5, alignItems: "center", top: 30 }}>
          {this.renderCards()}
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcfaf2",
  },
  card: {
    flex: 1,
    borderRadius: 20,
    height: 560,
    backgroundColor: "#f9f1dc",
    shadowColor: "#988a55",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  icons: {
    fontSize: 25,
    width: 25,
    alignSelf: "center",
  },
});
