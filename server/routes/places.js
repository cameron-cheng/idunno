require('dotenv').config() 

const router = require('express').Router()
const axios = require('axios')
const API_KEY = process.env.API_KEY

module.exports = () => {

  router.get('/places', async (req, res) => {
    const placesRequest = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=metrotown&type=restaurant&radius=500`);
    const results = placesRequest.data.results;

    res.json({ results, API_KEY })
  });

  return router;
}