// v.0.0.1
// Author: Emily Black
// Date: 1/31/18

import {EventPlace} from '../model/Place';

//Gets all event places
const index = (req, res) => {
    EventPlace.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

//Adds a new event place
export const addEventPlace = (req, res) => {
  //Defines what the DB requests
  const { body } = req;
  const newEventPlace = new EventPlace({ ...body });

  newEventPlace.save(err => {
    if (err) {
      res.sendStatus(500).send(err.message); //throws a server side error
    } else {
      res.send('Event successfully created.');
    }
  });
}

//Gets an event place given a placeID
export const getEventPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  EventPlace.findById(placeId, function (err, doc) {
    if (err) {
      res.status('500').send('Could not find event.'); //throws a server side error
    }
    else {
      res.json(doc);
    }
  })
}

//Updates an event places info
export const updateEventPlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields}, params: { placeId }} = req;
  
  EventPlace.findByIdAndUpdate(placeId, { ...fields }, (err, result) => {
    res.json(result);
  })
}

//Deletes an event place given an ID
export const deleteEventPlace = (req, res) => {
  //Defines what the DB requests
  const { params: { placeId } } = req;

  EventPlace.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
      res.status('500').send('Could not find event.'); //throws a server side error
    }
    else {
      res.json(result);
    }
  });
}

export default index;