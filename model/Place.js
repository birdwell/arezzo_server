// v.0.0.1
// Author: Emily Black
// Date: 2/1/18

// Future work: figure out how to enforce discriminator attributes

import mongoose, { Schema } from 'mongoose';

// Sets the discriminator/version key
export const options = { discriminatorKey: 'typeOfPlace', versionKey: false };

// Place schema.
// accessibility, imgs subject to change.
//  _id is the default key for Place
const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  hours: {
    openHour: { type: Number },
    closeHour: { type: Number },
  },
  price: { type: Number },
  imgs: [],
  contactInfo: {
    phoneNumber: String,
    address: { type: String, required: true },
    website: String,
    mediaLinks: [String],
  },
  suggestedAge: { type: String },
  paymentOptions: [String],
  languagesAvailable: [{ type: String, required: true }],
  restrictions: [{ type: String }],
  wifi: Boolean,
  accessibility: Boolean,
  visitDuration: Number,
}, options);

// Create the model for the discriminators.
const Place = mongoose.model('Place', placeSchema);

// Creates a new model/schema based off of the PLACE model, which is based off of the PLACE schema.
// Discriminators are a schema inheritance mechanism.

// Export the mongoose model
// Model: field, name
export default Place;
