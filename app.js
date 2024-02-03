const cors = require("cors");
const express = require("express");
//const keyPinsController = require('./controllers/keyPinsController')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/keyPins', keyPinsController)

app.get("/", (req, res) => {
  res.status(200).send("Gatekey Home");
});


app.get('*', (req, res) => {
  res.status(404).send('Error: Invalid Route')
})


module.exports = app;