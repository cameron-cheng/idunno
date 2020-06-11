require('dotenv').config() 

const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = (filters) => {
if (filters.searchType === 'nearby') {
    return nearbySearch(filters)
  } else {
    return textSearch(filters)
  }

  async function nearbySearch() {
    try {  
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&type=${filters.type}&radius=${filters.radius}`
      );
      console.log("API Request Finished!", "Length:", res.data.results.length);
      return res.data.results;
    } catch(err) {
      console.log(err)
    }
  }

  async function textSearch() {
    try {  
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&type=${filters.type}&query=${filters.area}`
      );
      console.log("API Request Finished!", "Length:", res.data.results.length);
      return res.data.results;
    } catch(err) {
      console.log(err)
    }
  }
}