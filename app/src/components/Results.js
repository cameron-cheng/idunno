import { API_KEY } from 'react-native-dotenv'
import axios from 'axios'

import React, {useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

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
    return null;
  } else {
    return (
      <View>
        <Text>This is the results page</Text>
        <Text>Result: {details.name}</Text>
        <Text>Total Ratings: {details.user_ratings_total}</Text>
        <Text>Reviewer: {details.reviews[0].author_name}</Text>
        <Text>Rating: {details.reviews[0].rating} / 5</Text>
        <Text>Text: {details.reviews[0].text}</Text>

        <Button title="home" onPress={() => props.history.push("/")}></Button>
      </View>
    )
}};