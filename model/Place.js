// v.0.0.1
// Author: Emily Black
// Date: 1/29/18

import mongoose, { Schema } from 'mongoose';

// Test event schema
// Author: Josh Birdwell
//const eventSchema = new Schema({
 // title: String,
 // date: Date,
 // location: String,
 // lng: Number,
 // lat: Number
 //});

//Place schema. 
//accessibility, imgs subject to change.
//_id is the default key for Place
const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  hours: {
    openHour: { type: Number, required: true },
    closeHour: { type: Number, required: true },
  },
  price: { type: Number, required: true },
  imgs: [ ],
  contact_info: {
    phone_num: String,
    address: { type: String, required: true },
    website: String,
    media_links: [ String ]
  },
  suggested_age: { type: String, required: true },
  payment_options: [{ type: String, required: true }],
  lang_avail: [{ type: String, required: true }],
  restrictions: [{ type: String, required: true }],
  wifi: Boolean,
  accessibility: Boolean,
  visitDuration: Number
});

// Create the model for the discriminators.
var Place = mongoose.model('Place', placeSchema);

//Creates a new model/schema based off of the PLACE model, which is based off of the PLACE schema.
//Discriminators are a schema inheritance mechanism.
var ShoppingPlace = Place.discriminator('Shopping', new Schema({
  typeOfShopping: String
}));

var OutdoorsPlace = Place.discriminator('Outdoors', new Schema({
  typeOfOutdoorsPlace: String, difficulty: String, distance: Number
}));

//If isIndoor is false, then its outdoors
var SightPlace = Place.discriminator('Sight', new Schema({
  typeOfSight: String, isIndoor: Boolean
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

//Export the mongoose model
//Model: field, name
module.exports = {
  Place: Place, 
  ShoppingPlace: ShoppingPlace, 
  OutdoorsPlace: OutdoorsPlace, 
  SightPlace: SightPlace, 
  EventPlace: EventPlace, 
  FoodPlace: FoodPlace
};