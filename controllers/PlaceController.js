// v.0.0.1
// Author: Emily Black
// Date: 1/25/18

import {Place} from '../model/Place';

//Arguments: request, response
const index = (req, res) => {
  Place.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

//Adds a new place
export const addPlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields }} = req; //MIGHT NEED TO CHANGE THIS
  
  const newPlace = new Place({ fields }); //MIGHT NEED TO CHANGE THIS
  
  newPlace.save(function (err) {
    if (err) {
      res.sendStatus(500).send('Could not add place.'); //throws a server side error
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
      res.status('500').send('Could not find place.'); //throws a server side error
    }
    else {
      res.json(doc); //returns a document with the given place
    }
  })
}

//Updates a places info
export const updatePlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields }, params: { placeId }} = req;
  
  Place.findByIdAndUpdate(placeId, { fields }, (err, result) => {
    if (err) {
      res.status('500').send('Could not update place.'); //throws a server side error
    }
    else {
      res.json(result);
    }
  })
}

//Deletes a place given an ID
export const deletePlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  Place.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
      res.status('500').send('Could not find place.'); //throws a server side error
    }
    else {
      res.json(result);
    }
  });
}

export default index;