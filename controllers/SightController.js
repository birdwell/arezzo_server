// v.0.0.1
// Author: Emily Black
// Date: 1/31/18

import {SightPlace} from '../model/Place';

//Gets all sight places
const index = (req, res) => {
    SightPlace.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

//Adds a new sight place
export const addSightPlace = (req, res) => {
  //Defines what the DB requests
  const { body } = req;
  const newSightPlace = new SightPlace({ ...body });

  newSightPlace.save(err => {
    if (err) {
      res.sendStatus(500).send(err.message); //throws a server side error
    } else {
      res.send('Sight successfully created.');
    }
  });
}

//Gets a sight place given a placeID
export const getSightPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  SightPlace.findById(placeId, function (err, doc) {
    if (err) {
      res.status('500').send('Could not find sight.'); //throws a server side error
    }
    else {
      res.json(doc);
    }
  })
}

//Updates a sight places info
export const updateSightPlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields}, params: { placeId }} = req;
  
  SightPlace.findByIdAndUpdate(placeId, { ...fields }, (err, result) => {
    res.json(result);
  })
}

//Deletes a sight place given an ID
export const deleteSightPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  SightPlace.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
      res.status('500').send('Could not find sight.'); //throws a server side error
    }
    else {
      res.json(result);
    }
  });
}

export default index;