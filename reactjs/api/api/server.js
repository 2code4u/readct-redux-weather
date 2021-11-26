const express = require('express');
const request  = require('request');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const WEATHER_KEY = '90a6860f200d2067fc1034af742a0294' // Конечно надо хранить это в энвах, но нужна ещё одна библиотека так что пфф

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

app.post('/api/weather/', (req, res) =>{
  const city = encodeURIComponent(req.body.city)

  request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${WEATHER_KEY}`,
    (err, result, body) => {
      if (err) {
        return res.status(500).send({message: err})
      }
      res.send(body)
    })
})
