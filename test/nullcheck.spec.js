/* Author: Emily Black */
/* Tests to check if models have null required values */
import { Event, Food, Outdoors, Shopping, Sight } from '../model';

const assert = require('assert');

describe('Check if unique attributes of models arent null', () => {

	describe('Events', () => {
		it('should expect to have no null unique attributes', () => {
			Event.find((err, events) => {
                // will test example to NOT be equal to either 'null' or 'undefined'
                should.exist(Event.startDate)
                should.exist(Event.endDate);
            });
		});
    });

    describe('Food', () => {
		it('should expect to have no null unique attributes', () => {
			Food.find((err, events) => {
                should.exist(Food.cuisine)
                should.exist(Food.atmosphere);
            });
		});
	});

    describe('Outdoors', () => {
		it('should expect to have no null unique attributes', () => {
			Outdoors.find((err, outdoors) => {
				should.exist(Outdoors.typeOfOutdoorsPlace)
                should.exist(Outdoors.difficulty)
                should.exist(Outdoors.distance);
			});
		});
	});

    describe('Shopping', () => {
		it('should expect to have no null unique attributes', () => {
			Shopping.find((err, shopping) => {
				should.exist(Shopping.typeOfShopping);
			});
		});
    });
    
    describe('Sights', () => {
		it('should expect to have no null unique attributes', () => {
			Sight.find((err, sight) => {
                should.exist(Sight.typeOfSight)
                should.exist(Sight.isIndoor);
			});
		});
	});

});