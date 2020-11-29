const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/weather', (req, res) => {
  const config = {
    params: {
      q: req.query.city,
      appid: `${process.env.OPEN_WEATHER_MAP_API_KEY}`
    },
  }
  //axios.get(config)
  axios.get('https://api.openweathermap.org/data/2.5/forecast/',config)
      .then(response => {
        //console.log(response);
        //console.log(response.data);
        //console.log(response.status);
        //console.log(response.statusText);
        //console.log(response.headers);
        //console.log(response.config);
        return res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        return res.send(error.response.data);
      }); 

});
 
app.get('/weather/health', (req, res) => {
  return res.send('healthcheck');
});

app.post('/weather', (req, res) => {
  return res.send('Received a POST HTTP method, but no plans to support it yet...');
});
 
app.put('/weather', (req, res) => {
  return res.send('Received a PUT HTTP method, but no plans to support it yet...');
});
 
app.delete('/weather', (req, res) => {
  return res.send('Received a DELETE HTTP method, but no plans to support it yet...');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Weather api will be listening on port ${process.env.PORT}!`),
);