const express = require('express');
const keyPin = express.Router();
const {
  getAllKeyPins,
  getKeyPin,
  createKeyPin,
  deleteKeyPin,
  updateKeyPin,
} = require('../queries/keyPins');
const {
  checkName,
  checkColor,
  checkAddress,
  checkComment,
} = require('../validations/checkKeyPins');

keyPin.get('/', async (req, res) => {
  try {
    const allKeyPins = await getAllKeyPins();
    res.status(200).json(allKeyPins);
  } catch (error) {
    res.status(500).json({ error: 'GateKey Pin Error' });
  }
});

keyPin.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const oneKeyPin = await getKeyPin(id);
    res.status(200).json(oneKeyPin);
  } catch (error) {
    res.status(404).json({ error: 'Gatekey Pin not Found' });
  }
});

keyPin.post(
  '/',
  checkName,
  checkColor,
  checkAddress,
  checkComment,
  
  async (req, res) => {
    try {
      const body = req.body;
      const createdKeyPin = await createKeyPin(body);
      res.status(200).json(createdKeyPin);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

keyPin.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedKeyPin = await deleteKeyPin(id);
    res.status(200).json(deletedKeyPin);
  } catch (error) {
    res.status(404).json({ error: 'Gatekey Pin not Found' });
  }
});

keyPin.put(
  '/:id',
  checkName,
  checkColor,
  checkAddress,
  checkComment,
  async (req, res) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const updatedKeyPin = await updateKeyPin(id, body);
      res.status(200).json(updatedKeyPin);
    } catch (error) {
      res.status(404).json({ error: 'GateKey Pins not Found' });
    }
  }
);

module.exports = keyPin;
