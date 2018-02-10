// v.0.0.1
// Author: Emily Black
// Date: 2/1/18

import { Shopping } from '../model';

// Gets all shopping places
const index = (req, res) => {
  Shopping.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

// Adds a new shopping place
export const addShoppingPlace = (req, res) => {
  // Defines what the DB requests
  const { body } = req;
  const newShoppingPlace = new Shopping({ ...body });

  newShoppingPlace.save((err) => {
    if (err) {
      res.send(err.message).sendStatus(500);
    } else {
      res.send('Shopping place successfully created.');
    }
  });
};

// Gets a shopping place given a placeID
export const getShoppingPlace = (req, res) => {
  // Defines what the DB requests
  const { params: { placeId } } = req;

  Shopping.findById(placeId, (err, doc) => {
    if (err) {
      res.send(err.message).sendStatus(500);
    } else {
      res.json(doc);
    }
  });
};

// Updates a shopping places info
export const updateShoppingPlace = (req, res) => {
  // Defines what the DB requests
  const { body: fields, params: { placeId } } = req;

  Shopping.findByIdAndUpdate(placeId, { ...fields }, { new: true }, (err, result) => {
    res.json(result);
  });
};

// Deletes a shopping place given an ID
export const deleteShoppingPlace = (req, res) => {
  // Defines what the DB requests
  const { params: { placeId } } = req;

  Shopping.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
      res.send(err.message).sendStatus(500);
    } else {
      res.json(result);
    }
  });
};

export default index;
