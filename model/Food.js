import { Schema } from 'mongoose';

import Place, { options } from './Place';


const FoodPlace = Place.discriminator('Food', new Schema({
	cuisine: String, atmosphere: String,
}, options));

export default FoodPlace;
