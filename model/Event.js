import { Schema } from 'mongoose';

import Place, { options } from './Place';

const EventPlace = Place.discriminator('Event', new Schema({
	dates: { startDate: String, endDate: String },
}, options));

export default EventPlace;
