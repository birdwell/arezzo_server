// v.0.0.1
// Author: Emily Black
// Date: 1/31/18

import {ShoppingPlace} from '../model/Place';

//Gets all shopping places
const index = (req, res) => {
  ShoppingPlace.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

//Adds a new shopping place
export const addShoppingPlace = (req, res) => {
  //Defines what the DB requests
  const { body } = req;
  const newShoppingPlace = new ShoppingPlace({ ...body });

  newShoppingPlace.save(err => {
    if (err) {
      res.sendStatus(500).send(err.message); //throws a server side error
    } else {
      res.send('Shopping place successfully created.');
    }
  });
}

//Gets a shopping place given a placeID
export const getShoppingPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  ShoppingPlace.findById(placeId, function (err, doc) {
    if (err) {
      res.status('500').send('Could not find shopping place.'); //throws a server side error
    }
    else {
      res.json(doc);
    }
  })
}

//Updates a shopping places info
export const updateShoppingPlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields}, params: { placeId }} = req;
  
  ShoppingPlace.findByIdAndUpdate(placeId, { ...fields }, (err, result) => {
    res.json(result);
  })
}

//Deletes a shopping place given an ID
export const deleteShoppingPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  ShoppingPlace.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
      res.status('500').send('Could not find shopping place.'); //throws a server side error
    }
    else {
      res.json(result);
    }
  });
}

export default index;