import { Schema } from 'mongoose';

import Place, { options } from './Place';

const OutdoorsPlace = Place.discriminator('Outdoors', new Schema({
	typeOfOutdoorsPlace: String, difficulty: String, distance: Number, // km
}, options));

export default OutdoorsPlace;
