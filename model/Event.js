import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema({
  title: String,
  date: Date,
  location: String
});

export default mongoose.model('event', eventSchema, 'events');
