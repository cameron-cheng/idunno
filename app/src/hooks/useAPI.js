import { API_KEY } from 'react-native-dotenv';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useAPI(filters) {
  const [places, setPlaces] = useState([]);

  async function nearbySearch() {
    try {  
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&type=${type}&radius=${radius}`
      );
      setPlaces(res.data.results)
      console.log("API Request Finished!", "Length:", places.length)
    } catch(err) {
      console.log(err)
    }
  }

  async function textSearch() {
    try {  
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&type=${filters.type}&query=${filters.area}`
      );
      setPlaces(res.data.results)
      console.log("API Request Finished!", "Length:", places.length)
    } catch(err) {
      console.log(err)
    }
  }

  
  useEffect(() => {

    if (filters.searchType === 'nearby') {
      nearbySearch(filters)
    } else {
      textSearch(filters)
    } 
  }, [])
 
  return places
}