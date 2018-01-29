// v.0.0.1
// Author: Emily Black
// Date: 1/23/18

import mongoose, { Schema } from 'mongoose';
// import { ObjectId } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/bson';

// Test event schema
// Author: Josh Birdwell
//const eventSchema = new Schema({
 // title: String,
 // date: Date,
 // location: String,
 // lng: Number,
 // lat: Number
 //});

// Place schema. 
// accessibility, imgs subject to change.
// _id is the default key for Place
const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true }
  },
  hours: {
    openHour: { type: Number, required: true },
    closeHour: { type: Number, required: true }
  },
  price: { type: Number, required: true },
  imgs: [ ],
  contact_info: {
    phone_num: Number,
    address: { type: String, required: true },
    website: String,
    media_links: [{ link: String }]
  },
  suggested_age: Number,
  payment_options: [{ type: String, required: true }],
  lang_avail: [{ language: { type: String, required: true } }],
  restrictions: [{ name: String }],
  wifi: Boolean,
  accessibility: Boolean,
  visitDuration: Number
});

// Create the model for the PLACE schema.
var Place = mongoose.model('Place', placeSchema);

// Creates a new model/schema based off of the PLACE model, which is based off of the PLACE schema.
// Discriminators are a schema inheritance mechanism.
// __t is by default the discriminator key, which is a string path
var ShoppingPlace = Place.discriminator('Shopping', new Schema({
  typeOfShopping: String
}));

var OutdoorsPlace = Place.discriminator('Outdoors', new Schema({
  typeOfOutdoorsPlace: String, difficulty: String, distance: Number
}));

var SightPlace = Place.discriminator('Sight', new Schema({
  typeOfSight: String, indoor_outdoor: String
}));

var EventPlace = Place.discriminator('Event', new Schema({
  dates: { start_date: { type: Date, required: true }, end_date: { type: Date, required: true } }
}));

var FoodPlace = Place.discriminator('Food', new Schema({
  cuisine: { type: String, required: true }, atmosphere: String
}));

// Test export event schema
// Author: Josh Birdwell
//export default model('event', eventSchema, 'events');

// Export the mongoose model
// Model: field name
module.exports = {
  Place: Place, 
  ShoppingPlace: ShoppingPlace, 
  OutdoorsPlace: OutdoorsPlace, 
  SightPlace: SightPlace, 
  EventPlace: EventPlace, 
  FoodPlace: FoodPlace
};