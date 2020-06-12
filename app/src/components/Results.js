import { API_KEY } from 'react-native-dotenv'
import axios from 'axios'

import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Container } from 'native-base';

import HeaderNav from './Header';
import Footer from './Footer'

export default function Results(props) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      try {
        const detailsRequest = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.result}&key=${API_KEY}`);
        setDetails(detailsRequest.data.result)
      } catch(err) {
        console.log(err)
      }
    }
    getDetails();
  }, []);
  
  if (!details) {
    return (
      <Container>
        <HeaderNav />
        <View style={styles.main}>
          <Text>Really...nothing?</Text>
        </View>
        <Footer />
      </Container>
    );
  } else {
    return (
      <Container>
        <HeaderNav />
        <View style={styles.main}>
          <Text>This is the results page</Text>
          <Text>Result: {details.name}</Text>
          <Text>Total Ratings: {details.user_ratings_total}</Text>
          <Text>Reviewer: {details.reviews[0].author_name}</Text>
          <Text>Rating: {details.reviews[0].rating} / 5</Text>
          <Text>Text: {details.reviews[0].text}</Text>

        </View>
        <Footer />
      </Container>
    )
}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 3, 
    height: 530,
    width: 300
  }

})