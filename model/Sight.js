import { Schema } from 'mongoose';

import Place, { options } from './Place';

// If isIndoor is false, then its outdoors
const SightPlace = Place.discriminator('Sight', new Schema({
	typeOfSight: String, isIndoor: Boolean,
}, options));


export default SightPlace;
