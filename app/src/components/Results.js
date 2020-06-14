import { API_KEY } from "react-native-dotenv";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

import { Container, Card, CardItem, Icon } from "native-base";
import Carousel from "react-native-snap-carousel";
import { Rating, Overlay } from "react-native-elements";

import HeaderNav from "./Header";
import Footer from "./Footer";
import Hurray from "./Hurray";
import { LinearGradient } from "expo-linear-gradient";

export default function Results(props) {
  
  const [details, setDetails] = useState(null);
  
  useEffect(() => {
    props.setRedirect({invitation: false, lobby: false, session: false});
    props.setFilters(props.baseFilters);
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

  const _imageItem = ({ item }) => {
    return (
      <Image
        style={{ height: 175, width: 300, borderRadius: 10 }}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photo_reference}&maxheight=300`,
        }}
      />
    );
  };

  {
    /* <Text>Reviewer: {details.reviews[0].author_name}</Text> */
  }
  {
    /* <Text>Rating: {details.reviews[0].rating} / 5</ext> */
  }
  {
    /* <Text>Text: {details.reviews[0].text}</Text> */
  }

  const _reviewItem = ({ item }) => {
    return (
      <CardItem
        style={{
          width: 300,
          height: 100,
          borderRadius: 10,
          backgroundColor: "#fcfaf2",
        }}
      >
        <View>
          <View style={{ flexDirection: "row" }}>
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
              }}
            >
              {item.rating} / 5
            </Text>
          </View>
          <Text style={{ fontSize: 12 }}>{item.text}</Text>
        </View>
      </CardItem>
    );
  };

  if (!props.result) {
    return (
      <Container>
        <HeaderNav />
        <View style={styles.main}>
          <Text>Really...nothing?</Text>
        </View>
        <Footer />
      </Container>
    );
  } else if (!details) {
    return null;
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
                sliderWidth={380}
                itemWidth={300}
                // inactiveSlideOpacity={0}
                layout={"default"}
              />
            </View>
            <View
              style={{ alignContent: "flex-start", width: 60, padding: 10 }}
            >
              <Icon
                type="Feather"
                name="clock"
                style={({ width: 21 }, styles.icons)}
              ></Icon>
              <Icon
                type="Fontisto"
                name="dollar"
                style={({ width: 12 }, styles.icons)}
              ></Icon>
              <Icon
                type="MaterialIcons"
                name="restaurant"
                style={({ width: 25 }, styles.icons)}
              ></Icon>
            </View>

            {/* <CardItem style={{ paddingLeft: 0, paddingRight: 0, alignSelf: 'center', backgroundColor: '#fcfaf2', borderRadius: 10 }}> */}
            <View style={{ alignItems: "center" }}>

              <Carousel
                data={details.reviews}
                renderItem={_reviewItem}
                enableSnap
                sliderWidth={380}
                itemWidth={300}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Icon
                type="MaterialIcons"
                name="location-on"
                style={({ width: 25 }, styles.icons)}
              ></Icon>
              <Icon
                type="MaterialCommunityIcons"
                name="web"
                style={({ width: 25 }, styles.icons)}
              ></Icon>
              <Icon
                type="Entypo"
                name="phone"
                style={({ width: 25 }, styles.icons)}
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
    width: 380,
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
    // fontSize: 20,
    alignSelf: "center",
    color: "#2a9d8f",
    shadowColor: "#988a55",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    paddingVertical: 5,
  },
});
