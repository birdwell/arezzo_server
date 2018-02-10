import { Schema } from 'mongoose';

import Place, { options } from './Place';

const ShoppingPlace = Place.discriminator('Shopping', new Schema({
	typeOfShopping: String,
}, options));

export default ShoppingPlace;
