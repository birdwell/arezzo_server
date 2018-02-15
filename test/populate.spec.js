/* Author: Josh Birdwell */
/* Tests to check if we created 5 of each model */
import { Event, Food, Outdoors, Shopping, Sight } from '../model';

const assert = require('assert');

describe('Check if population was successful', () => {
	describe('Events', () => {
		it('should equal the 5 we created', () => {
			Event.find((err, events) => {
				assert.equal(events.length, 5);
			});
		});
	});

	describe('Food', () => {
		it('should equal the 5 we created', () => {
			Food.find((err, food) => {
				assert.equal(food.length, 5);
			});
		});
	});

	describe('Outdoors', () => {
		it('should equal the 5 we created', () => {
			Outdoors.find((err, outdoors) => {
				assert.equal(outdoors.length, 5);
			});
		});
	});

	describe('Shopping', () => {
		it('should equal the 5 we created', () => {
			Shopping.find((err, shopping) => {
				assert.equal(shopping.length, 5);
			});
		});
	});

	describe('Sights', () => {
		it('should equal the 5 we created', () => {
			Sight.find((err, sight) => {
				assert.equal(sight.length, 5);
			});
		});
	});
});
