const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');
app.locals.thermo = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send({"temperature": app.locals.thermo.getTemperature()});
});

app.post('/up', (req, res) => {
  req.app.locals.thermo.up();
});

app.post('/down', (req, res) => {
  req.app.locals.thermo.down();
});

app.delete('/temperature', (req, res) => {
  req.app.locals.thermo.reset();
});

app.post('/psm_on', (req, res) => {
  req.app.locals.thermo.setPowerSavingMode(true);
});

app.post('/psm_off', (req, res) => {
  req.app.locals.thermo.setPowerSavingMode(false);
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);
