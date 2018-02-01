// v.0.0.1
// Author: Emily Black
// Date: 2/1/18

import {Place} from '../model/Place';

//Gets all places
const index = (req, res) => {
  Place.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

//Adds a new place
export const addPlace = (req, res) => {
  //Defines what the DB requests
  const { body } = req;
  const newPlace = new Place({ ...body });

  newPlace.save(err => {
    if (err) {
      res.send(err.message);
      res.sendStatus(500); //throws a server side error
    } else {
      res.send('Place successfully created.');
    }
  });
}

//Gets a place given a placeID
export const getPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  Place.findById(placeId, function (err, doc) {
    if (err) {
      res.send(err.message);
      res.sendStatus(500); //throws a server side error
    }
    else {
      res.json(doc);
    }
  })
}

//Updates a places info
export const updatePlace = (req, res) => {
  //Defines what the DB requests
  const { body: fields, params: { placeId }} = req;
  
  Place.findByIdAndUpdate(placeId, { ...fields }, {new: true}, (err, result) => {
    res.json(result);
  })
}

//Deletes a place given an ID
export const deletePlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  Place.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
      rres.send(err.message);
      res.sendStatus(500); //throws a server side error
    }
    else {
      res.json(result);
    }
  });
}

export default index;