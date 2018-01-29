// v.0.0.1
// Author: Emily Black
// Date: 1/26/18

import ShoppingPlace from '../model/Place';

//Arguments: request, response
const index = (req, res) => {
    ShoppingPlace.find({}, null, {}, (err, places) => (
    res.json(places)
  ));
};

//Adds a new shopping place
export const addShoppingPlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields }} = req; //MIGHT NEED TO CHANGE THIS
  
  const newShoppingPlace = new ShoppingPlace({ fields }); //MIGHT NEED TO CHANGE THIS
  
  newShoppingPlace.save(function (err) {
    if (err) {
      res.sendStatus(500).send('Could not add shopping place.'); //throws a server side error
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
      res.json(doc); //returns a document with the given place
    }
  })
}

//Updates a shopping places info
export const updateShoppingPlace = (req, res) => {
  //Defines what the DB requests
  const { body: { fields }, params: { placeId }} = req;
  
  ShoppingPlace.findByIdAndUpdate(placeId, { fields }, (err, result) => {
    if (err) {
      res.status('500').send('Could not update shopping place.'); //throws a server side error
    }
    else {
      res.json(result);
    }
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