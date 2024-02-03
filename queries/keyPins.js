const db = require('../db/dbConfig');

const getAllKeyPins = async () => {
  try {
    const allKeyPins = await db.any('SELECT * FROM gatekey');
    return allKeyPins;
  } catch (error) {
    return error;
  }
};

const getKeyPin = async (id) => {
  try {
    const oneKeyPin = await db.one('SELECT * FROM gatekey WHERE id=$1', id);
    return oneKeyPin;
  } catch (error) {
    return error;
  }
};

const createKeyPin = async (set) => {
  try {
    const newKeyPin = await db.one(
      'INSERT INTO gatekey (name, address, color, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [
        set.name,
        set.address,
        set.color,
        set.comment
      ]
    );
    return newKeyPin;
  } catch (error) {
    return error;
  }
};

const deleteKeyPin = async (id) => {
  try {
    const deletedKeyPin = await db.one('DELETE FROM gatekey WHERE id=$1 RETURNING *', id);
    return deletedKeyPin;
  } catch (error) {
    return error;
  }
};

const updateKeyPin = async (id, set) => {
  try {
    const updatedKeyPin = await db.one(
      'UPDATE gatekey SET name=$1, color=$2, address=$3, comment=$4 WHERE id=$5 RETURNING *',
      [
        set.name,
        set.color,
        set.address,
        set.comment,
        id,
      ]
    );
    return updatedKeyPin;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllKeyPins,
  getKeyPin,
  createKeyPin,
  deleteKeyPin,
  updateKeyPin,
};
