import { API_KEY } from 'react-native-dotenv'
import axios from 'axios'

import React, {useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Container, Card, CardItem } from 'native-base';
import Carousel from 'react-native-snap-carousel'
import { Rating } from "react-native-elements"
import HeaderNav from './Header';
import Footer from './Footer'

export default function Results(props) {
  const [details, setDetails] = useState(null);

  // const Users = [
  //   {id: '1', title: "Dark Knight", reviews: "5/5", theatre: "Vancouver", genre: "Action/Adventure", uri: require('../assets/feed_images/1.jpg')},
  //   {id: '2', title: "Jungle Book", reviews: "3/5", theatre: "Coquitlam", genre: "Adventure/Fantasy", uri: require('../assets/feed_images/2.jpg')},
  //   {id: '3', title: "Avengers", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/3.jpg')},
  //   {id: '4', title: "Hunger Games", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/4.jpg')},
  //   {id: '5', title: "Moana", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/5.jpg')},
  //   {id: '6', title: "Jurassic World", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/6.jpg')},
  //   {id: '7', title: "Glass", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/7.jpg')},
  //   {id: '8', title: "Dawn of the Planet of the Apes", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/8.jpg')},
  //   {id: '9', title: "Jaws", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/9.jpg')},
  //   {id: '10', title: "Dark Knight", reviews: "5/5", theatre: "Langley", genre: "Action/Adventure", uri: require('../assets/feed_images/1.jpg')},
  //   {id: '11', title: "Jungle Book", reviews: "3/5", theatre: "Richmond", genre: "Adventure/Fantasy", uri: require('../assets/feed_images/2.jpg')},
  // ]

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
  
  const _imageItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image  
          style={{height: 144, width: 256, top: 27, borderRadius: 20}}
          source={{uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${item.photo_reference}&maxheight=200`}} />
      </View>
    );
  }
  
  {/* <Text>Reviewer: {details.reviews[0].author_name}</Text> */}
  {/* <Text>Rating: {details.reviews[0].rating} / 5</ext> */}
  {/* <Text>Text: {details.reviews[0].text}</Text> */}
  const _reviewItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingRight: 10, paddingBottom: 5}}>{item.author_name}</Text>
          <Text>{item.rating} / 5</Text>
        </View>
    <Text style={{fontSize: 10}}>{item.text}</Text>
      </View>
    );
  }

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
      <Container style={styles.container}>
        <HeaderNav />
        <View style={styles.main}>
          {/* <Text style={{fontSize: 30}}>Results</Text> */}
          
          <Card style={styles.card}>
            <Text>Result: {details.name}</Text>
            <Rating type='custom' imageSize={30} readonly startingValue={details.rating} ratingColor='#e76f51' ratingBackgroundColor='#fcfaf2' style={{padding:10, paddingLeft: 20, paddingBottom: 20, alignSelf: 'flex-start'}}></Rating>
            <CardItem style={{width: 329, paddingLeft: 0, paddingRight: 0, alignSelf:'center', backgroundColor: '#f9f1dc'}}>
              <View style={styles.carouselBackground}>
                <Carousel
                  style={styles.carousel}
                  data={details.photos}
                  renderItem={_imageItem}
                  enableSnap
                  sliderWidth={315}
                  itemWidth={200}
                  inactiveSlideOpacity={0}
                  layout={'stack'}
                  layoutCardOffset={`12`}
                />
              </View>
            </CardItem>
          
          
          <CardItem style={{width: '100%', paddingLeft: 0, paddingRight: 0, alignSelf: 'center', backgroundColor: '#f9f1dc' }}>
            <View style={styles.carouselBackground}>
              <Carousel
                style={styles.carousel}
                data={details.reviews}
                renderItem={_reviewItem}
                enableSnap
                sliderWidth={300}
                itemWidth={250}
                inactiveSlideOpacity={0}
                inactiveSlideScale={1}
              />
            </View>
          </CardItem>
          
          </Card>
        </View>
        <Footer />
      </Container>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 5, 
    top: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: '#eef'
  },
  carouselBackground: {
    justifyContent: 'center',
    height: 200,
    width: '100%'
  },
  slide: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 256,
    
  },
  card: {
    width: 330, 
    // justifyContent: 'center', 
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#f9f1dc',
    shadowColor: '#988a55',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 20,
  
  }
})