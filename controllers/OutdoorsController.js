// v.0.0.1
// Author: Aysha Ali
// Date: 2/4/2018

import {OutdoorsPlace} from '../model/Place';

//Get outdoor places
const index = (req, res) => {
    OutdoorsPlace.find({}, null, {}, (err, places) => (
        res.json(places)
    ));
};

//Adds new outdoor Place
export const addOutdoorsPlace = (req, res)  => {
    //defines what the DB requests
    const { body } = req;
    const newOutdoorsPlace = new OutdoorsPlace({...body });

    newOutdoorsPlace.save(err => {
        if(err) {
            res.send(err.message).sendStatus(500);
            res.sendStatus(500); // throws a server side error
        } else {
            res.send('Outdoor successfully created.');
        }
    });
}

//Gets outdoor place given placeID
export const getOutdoorsPlace = (req, res) => {
    //defines what the Db requests
    const { params: { placeId } } = req;

    OutdoorsPlace.findById(placeId, function(err, doc) {
        if(err) {
            res.send(err.message).sendStatus(500);
            res.sendStatus(500); // throws a server side error
        }
        else {
            res.json(doc);
        }
    })
}

//Updates a outdoor place info
export const updateOutdoorsPlace = (req, res) => {
    //defines what the DB requests
    const { body: fields, params: {placeId }} = req;

    OutdoorsPlace.findByIdAndUpdate(placeId, {...fields }, {new: true}, (err, result) => {
        res.json(result);        
    })
}

//Deletes a outdoor place given an placeID
export const deleteOutdoorsPlace = (req, res) => {
    //Defines what the DB requests
    const { params: {placeId } } = req;

    OutdoorsPlace.findByIdAndRemove(placeId,(err, result) => {
    if (err) {
        res.send(err.message).sendStatus(500);
        
    }
    else {
        res.json(result);
    }
    });
}

export default index;