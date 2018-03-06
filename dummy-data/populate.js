import mongoose from 'mongoose';
import { Event, Food, Outdoors, Shopping, Sight } from '../model';

import { events } from './events.json';
import { foods } from './foods.json';
import { outdoors } from './outdoors.json';
import { shopping } from './shopping.json';
import { sights } from './sights.json';

mongoose.connect('mongodb://admin:kHooCJJTJfIr4GM4@arezzo-shard-00-00-ewv9s.mongodb.net:27017,arezzo-shard-00-01-ewv9s.mongodb.net:27017,arezzo-shard-00-02-ewv9s.mongodb.net:27017/test?ssl=true&replicaSet=Arezzo-shard-0&authSource=admin');

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
