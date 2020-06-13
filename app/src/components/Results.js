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

  const Users = [
    {id: '1', title: "Dark Knight", reviews: "5/5", theatre: "Vancouver", genre: "Action/Adventure", uri: require('../assets/feed_images/1.jpg')},
    {id: '2', title: "Jungle Book", reviews: "3/5", theatre: "Coquitlam", genre: "Adventure/Fantasy", uri: require('../assets/feed_images/2.jpg')},
    {id: '3', title: "Avengers", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/3.jpg')},
    {id: '4', title: "Hunger Games", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/4.jpg')},
    {id: '5', title: "Moana", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/5.jpg')},
    {id: '6', title: "Jurassic World", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/6.jpg')},
    {id: '7', title: "Glass", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/7.jpg')},
    {id: '8', title: "Dawn of the Planet of the Apes", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/8.jpg')},
    {id: '9', title: "Jaws", reviews: "4/5", theatre: "Burnaby", genre: "Action/Sci-Fi", uri: require('../assets/feed_images/9.jpg')},
    {id: '10', title: "Dark Knight", reviews: "5/5", theatre: "Langley", genre: "Action/Adventure", uri: require('../assets/feed_images/1.jpg')},
    {id: '11', title: "Jungle Book", reviews: "3/5", theatre: "Richmond", genre: "Adventure/Fantasy", uri: require('../assets/feed_images/2.jpg')},
  ]

  // useEffect(() => {
  //   async function getDetails() {
  //     try {
  //       const detailsRequest = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.result}&key=${API_KEY}`);
  //       setDetails(detailsRequest.data.result)
  //       console.log(detailsRequest.data.result)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   getDetails();
  // }, []);
  
  const _imageItem = ({item}) => {
    return (
      <View style={{alignSelf:'center', padding: 0}}>
        <Image  
          style={{height: 144, width: 256, borderRadius: 20, alignSelf: 'center'}}
          source={item.uri} />
      </View>
    );
  }
  
  const _reviewItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text>{item.title}</Text>
        <Text>{item.reviews}</Text>
        <Text>{item.genre}</Text>
      </View>
    );
  }

  // if (!details) {
  //   return (
  //     <Container>
  //       <HeaderNav />
  //       <View style={styles.main}>
  //         <Text>Really...nothing?</Text>
  //       </View>
  //       <Footer />
  //     </Container>
  //   );
  // } else {
    return (
      <Container style={styles.container}>
        <HeaderNav />
        <View style={styles.main}>
          {/* BANNER STYLE */}
          
          <Text style={{padding: 10, fontSize: 30}}>Results</Text> 
          <View> 
          <Card style={{width:330, height: 500, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>Result: {details.name}</Text> */}
            <Text>Cactus Club Cafe</Text>
            {/* <Text>Rating: {details.rating}</Text> */}
            <Rating type='custom' imageSize={30} readonly startingValue={4} ratingColor='#e76f51' ratingBackgroundColor='#fcfaf2' style={{padding:10, paddingLeft: 20, paddingBottom: 20, }}></Rating>
            
            <View style={styles.carouselBackground}>
              <CardItem style={{width: '100%', height: 220, paddingLeft:0, paddingRight:0 }}>
                <Carousel
                  style={styles.carousel}
                  data={Users}
                  renderItem={_imageItem}
                  enableSnap
                  sliderWidth={320}
                  itemWidth={200}
                  inactiveSlideOpacity={0}
                  layout={'stack'} 
                  layoutCardOffset={`16`}
                />
              </CardItem>
            </View>
          
            {/* <Text>Reviewer: {details.reviews[0].author_name}</Text> */}
            {/* <Text>Rating: {details.reviews[0].rating} / 5</Text> */}
            {/* <Text>Text: {details.reviews[0].text}</Text> */}
            <View style={styles.carouselBackground}>
              <CardItem style={{width: '100%', paddingLeft: 0, paddingRight: 0}}>
                <Carousel
                  style={styles.carousel}
                  data={Users}
                  renderItem={_reviewItem}
                  enableSnap
                  sliderWidth={380}
                  itemWidth={300}
                  inactiveSlideScale={1}
                />
              </CardItem>
            </View>
          </Card>
          </View>
        </View>
        <Footer />
      </Container>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 5, 
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 20,
    height: 518,
    // width: 530,
    backgroundColor: '#eef'
  },
  carousel: {
    
  },
  carouselBackground: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    height: 144,
    // width: '90%'
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 256
  }
})