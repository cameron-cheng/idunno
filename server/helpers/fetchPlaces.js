require('dotenv').config() 

const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = (filters) => {

  let additionalQueries = '';

  for (const f in filters) {
    if(filters[f] === true) {
      additionalQueries += `+${f}`;
    }
  }

  if (filters.searchType === 'nearby') {
    return nearbySearch(filters)
  } else {
    return textSearch(filters)
  }
  
  async function nearbySearch() {
    try {  
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=49.2813245,-123.1171937&radius=${filters.radius}&type=${filters.type}&minprice=${filters.price - 1}&maxprice=${filters.price}&keyword=restaurant${additionalQueries}`
      );
      console.log("API Request Finished!", "Length:", res.data.results.length);
      console.log("Request URL:", res.config.url);
      return res.data.results;
    } catch(err) {
      console.log(err)
    }
  }

  async function textSearch() {
    try {  
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&type=${filters.type}&minprice=${filters.price - 1}&maxprice=${filters.price}&query=${filters.area}${additionalQueries}`
      );
      console.log("API Request Finished!", "Length:", res.data.results.length);
      console.log("Request URL:", res.config.url);
      return res.data.results;
    } catch(err) {
      console.log(err)
    }
  }
}