import mongoose from 'mongoose';
import { Event, Food, Outdoors, Shopping, Sight } from '../model';

import { events } from './events.json';
import { foods } from './foods.json';
import { outdoors } from './outdoors.json';
import { shopping } from './shopping.json';
import { sights } from './sights.json';

mongoose.connect('mongodb://localhost/arezzo');

const handleError = error => console.error(error);

events.forEach((data) => {
	const event = new Event(data);
	event.save((error) => {
		if (error) { return handleError(error); }

		console.log('Successfully created.');
	});
});


foods.forEach((data) => {
	const event = new Food(data);
	event.save((error) => {
		if (error) { return handleError(error); }

		console.log('Successfully created.');
	});
});

outdoors.forEach((data) => {
	const event = new Outdoors(data);
	event.save((error) => {
		if (error) { return handleError(error); }

		console.log('Successfully created.');
	});
});

shopping.forEach((data) => {
	const event = new Shopping(data);
	event.save((error) => {
		if (error) { return handleError(error); }

		console.log('Successfully created.');
	});
});

sights.forEach((data) => {
	const event = new Sight(data);
	event.save((error) => {
		if (error) { return handleError(error); }

		console.log('Successfully created.');
	});
});
