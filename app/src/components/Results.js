import { API_KEY } from "react-native-dotenv";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Alert, Linking, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Container, Card, CardItem, Icon, Button } from "native-base";
import Carousel from "react-native-snap-carousel";
import { Rating, Overlay } from "react-native-elements";
import {LinearGradient } from 'expo-linear-gradient'

import HeaderNav from "./Header";
import Footer from "./Footer";
import Hurray from "./Hurray";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Results(props) {
  const [details, setDetails] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    props.setRedirect({ invitation: false, lobby: false, session: false });
    props.setFilters(props.baseFilters);
    props.setPlaces([]);
    props.setIsHost(false);

    async function getDetails() {
      try {
        const detailsRequest = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.result}&key=${API_KEY}`
        );
        setDetails(detailsRequest.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    getDetails();
  }, []);

  function phoneModal() {
    Alert.alert(
      "Call",
      details.formatted_phone_number,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Call", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  }
  const getWeekDayHours = () => {
    const weekDayArray = details.opening_hours.weekday_text;
    // console.log("WEEKDAY", weekDayArray)

    const date = new Date();
    // console.log(date.getDay())
    const today = date.getDay();

    if (!weekDayArray) {
      return "Hours not available"
    } else {
      if (today === 0) {
        return weekDayArray[6];
      } else {
        return weekDayArray[today - 1];
      }
    }


  }

  const getAddress = () => {
    const stNum = details.address_components[0].short_name;
    const stName = details.address_components[1].short_name;
    const city = details.address_components[3].short_name;
    const province = details.address_components[5].short_name;
    return `${stNum} ${stName}, ${city}, ${province}`
  }

  const _imageItem = ({ item }) => {
    return (
      <Image
        style={{ height: SCREEN_HEIGHT - 700, width: SCREEN_WIDTH -100, borderRadius: 10 }}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photo_reference}&maxheight=300`,
        }}
      />
    );
  };

  const toggleReviewOverlay = () => {
    setVisible(!visible);
  }

  const reviewOverlay = () => {
    
  }

  const _reviewItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={toggleReviewOverlay}>
      <Overlay
      overlayStyle={{
        top: 20,
        borderRadius: 10,
        width: SCREEN_WIDTH -60,
        maxHeight: SCREEN_HEIGHT -400,
        backgroundColor: "#fcfaf2",
      }}
      isVisible={visible}
      onBackdropPress={toggleReviewOverlay}
    >
     
     <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={{paddingRight: 10, paddingBottom: 5, fontSize: 30, fontWeight: "600", color: "#09413a",}}>{item.author_name}  </Text>
          <Text style={{paddingRight: 10, paddingBottom: 5, fontSize: 30, fontWeight: "600",color: "#ee937c", fontFamily: 'Avenir'}}>{item.rating} / 5</Text>
       </View>
       <Text style={{fontSize: 18,fontFamily: 'Avenir',}}>{item.text}</Text>
     </ScrollView>
    </Overlay>



      <CardItem
        style={{
          width: 300,
          height: 100,
          borderRadius: 10,
          backgroundColor: "#fcfaf2",
        }}
      >
        <View style={{ alignSelf: 'flex-start', width: '100%'}}>
          <View style={{ flexDirection: "row" , }}>
            <Text
              style={{
                paddingRight: 10,
                paddingBottom: 5,
                fontSize: 15,
                fontWeight: "600",
                color: "#09413a",
              }}
            >
              {item.author_name}
            </Text>
            <Text
              style={{
                paddingRight: 10,
                paddingBottom: 5,
                fontSize: 15,
                fontWeight: "600",
                color: "#ee937c",
                fontFamily: 'Avenir'
              }}
            >
              {item.rating} / 5
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12,fontFamily: 'Avenir', position: 'absolute', }}>{item.text}</Text>
            <LinearGradient colors={['rgba(255,255,255,0)',"#fcfaf2"]} start={[0, 0.4]} end={[0,.9]} style={{ top: -5, position: 'relative', alignSelf: 'center', width: '102%', height: 75}}></LinearGradient>
          </View>
        </View>
      </CardItem>
      
      </TouchableOpacity>
    );
  };

  if (!props.result) {
    return (
      <Container>
        <HeaderNav />
        <View style={styles.main}>
          <Text>Can't make a decision. You're too picky... Try Again</Text>
        </View>
        <Footer />
      </Container>
    );
  } else if (!details) {
    return (
      <Container>
        <HeaderNav />
        <View style={styles.main} />
        <Footer />
      </Container>
    );
  } else {
    return (
      <Container style={styles.container}>
        <HeaderNav />

        <View style={styles.main}>
          <Card style={styles.card}>
            <View>
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "#09413a",
                  fontSize: 25,
                  padding: 10,
                  paddingTop: 0,
                  paddingBottom: 0,
                  fontFamily: 'Avenir'
                }}
              >
                {details.name}
              </Text>
              <Rating
                type="custom"
                imageSize={30}
                readonly
                startingValue={details.rating}
                ratingColor="#ee937c"
                ratingBackgroundColor="#cccbca"
                style={styles.stars}
              ></Rating>
            </View>

            <View style={{ alignItems: "center" }}>
              <Carousel
                data={details.photos}
                renderItem={_imageItem}
                enableSnap
                sliderWidth={SCREEN_WIDTH -50}
                itemWidth={SCREEN_WIDTH -100}
                // inactiveSlideOpacity={0}
                layout={"default"}
              />
            </View>
            <View style={{ flexDirection: "row", height: 110 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Button
                  transparent
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Icon type="Feather" name="clock" style={styles.clock} />
                </Button>

                <Button transparent style={{flex: 1, left: -6 }} onPress={()=>{ Linking.openURL(details.url)}}>

                  <Icon
                    type="MaterialIcons"
                    name="location-on"
                    style={styles.location}
                  />
                </Button>
              </View>

              <View style={{flex:4,padding:16, paddingLeft:0, justifyContent: 'space-between'}}> 
                <Text style={{fontSize: 15, fontFamily: 'Avenir'}}>{getWeekDayHours()}</Text>
                <Text style={{fontSize: 15, fontFamily: 'Avenir'}}>{getAddress()}</Text>

              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <Carousel
                data={details.reviews}
                renderItem={_reviewItem}
                enableSnap
                sliderWidth={SCREEN_WIDTH -50}
                itemWidth={300}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Icon
                type="MaterialCommunityIcons"
                name="web"
                style={({ width: 25 }, styles.icons)}
                onPress={() => {
                  Linking.openURL(details.website);
                }}
              />
              <Icon
                type="Entypo"
                name="phone"
                style={({ width: 25 }, styles.icons)}
                onPress={() => {
                  phoneModal();
                }}
              ></Icon>
              <Icon
                type="MaterialCommunityIcons"
                name="calendar-multiselect"
                style={({ width: 25 }, styles.icons)}
              ></Icon>
            </View>
          </Card>
          <Hurray />
        </View>
        <Footer />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfaf2",
  },
  main: {
    flex: 5,
    top: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    flex: 1,
    width: SCREEN_WIDTH -50,
    alignSelf: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#f9f1dc",
    shadowColor: "#988a55",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
  },
  stars: {
    padding: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    alignSelf: "flex-start",
  },
  icons: {
    alignSelf: "center",
    color: "#2a9d8f",
    paddingVertical: 5,
  },
  clock: {
    color: "#2a9d8f",
    fontSize: 30,
    width: 35,
  },
  location: {
    color: "#2a9d8f",
    fontSize: 40,
    width: 35,
  },
});
