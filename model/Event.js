import mongoose, { Schema } from 'mongoose';
// Emily test
const eventSchema = new Schema({
  title: String,
  date: Date,
  location: String,
  lng: Number,
  lat: Number
});

export default mongoose.model('event', eventSchema, 'events');
