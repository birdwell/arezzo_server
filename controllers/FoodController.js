// v.0.0.1
// Author: Aysha Ali
// Date: 2/4/2018

import { Food } from '../model';

// Get Food places
const index = (req, res) => {
    Food.find({}, null, {}, (err, places) => (
        res.json(places)
    ));
};

// Adds new Food Place
export const addFoodPlace = (req, res) => {
    // defines what the DB requests
    const { body } = req;
    const newFoodPlace = new Food({ ...body });

    newFoodPlace.save((err) => {
        if (err) {
            res.send(err.message).sendStatus(500);
            res.sendStatus(500); // throws a server side error
        } else {
            res.send('Food place successfully created.');
        }
    });
};

// Gets food place given placeID
export const getFoodPlace = (req, res) => {
    // defines what the Db requests
    const { params: { placeId } } = req;

    Food.findById(placeId, (err, doc) => {
        if (err) {
            res.send(err.message).sendStatus(500);
            res.sendStatus(500); // throws a server side error
        } else {
            res.json(doc);
        }
    });
};

// Updates a food place info
export const updateFoodPlace = (req, res) => {
    // defines what the DB requests
    const { body: fields, params: { placeId } } = req;

    Food.findByIdAndUpdate(placeId, { ...fields }, { new: true }, (err, result) => {
        res.json(result);
    });
};

// Deletes a food place given an placeID
export const deleteFoodPlace = (req, res) => {
    // Defines what the DB requests
    const { params: { placeId } } = req;

    Food.findByIdAndRemove(placeId, (err, result) => {
    if (err) {
        res.send(err.message).sendStatus(500);
    } else {
        res.json(result);
    }
    });
};

export default index;
