// v.0.0.1
// Author: Emily Black
// Date: 1/23/18

import mongoose, { Schema, Model } from 'mongoose';
import { GridFSBucket } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/mongodb';

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
const placeSchema = new Schema({
  _id: "", // NOSQL autogens ID
  title: String,
  description: String,
  location: {
    lat: Number,
    long: Number
  },
  hours: {
    openHour: Number,
    closeHour: Number
  },
  price: Number,
  imgs: [{ data: GridFSBucket }],
  contact_info: {
    phone_num: Number,
    address: String,
    website: String,
    media_links: [{ link: String }]
  },
  suggested_age: Number,
  payment_options: [{ type: String }],
  lang_avail: [{ language: String }],
  restrictions: [{ name: String }],
  wifi: Boolean,
  accessibility: Boolean,
  visitDuration: Number
});

// Create the model for the PLACE schema.
var Place = model('Place', placeSchema);

// Creates a new model/schema based off of the PLACE model, which is based off of the PLACE schema.
// Discriminators are a schema inheritance mechanism.
var ShoppingPlace = Place.discriminator('Shopping', new Schema({
  type: String
}));

var OutdoorsPlace = Place.discriminator('Outdoors', new Schema({
  type: String, difficulty: String, distance: Number
}));

var SightPlace = Place.discriminator('Sight', new Schema({
  type: String, indoor_outdoor: String
}));

var EventPlace = Place.discriminator('Event', new Schema({
  dates: { start_date: Date, end_date: Date }
}));

var FoodPlace = Place.discriminator('Food', new Schema({
  cuisine: String, atmosphere: String
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