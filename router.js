// v.0.0.1
// Author: Emily Black
// Date: 2/1/18

import { Router } from 'express';
import PlaceController, { addPlace, updatePlace, getPlace, deletePlace } from './controllers/PlaceController';
import ShoppingController, { getShoppingPlace, updateShoppingPlace, deleteShoppingPlace, addShoppingPlace } from './controllers/ShoppingController';
import EventController, { addEventPlace, updateEventPlace, getEventPlace, deleteEventPlace } from './controllers/EventController';
import SightController, { addSightPlace, updateSightPlace, getSightPlace, deleteSightPlace } from './controllers/SightController';

const router = Router();

//GET = gets data
//POST = adds data
//PUT = updates data
//DELETE = deletes data

//This route gets a specific place, updates a specific place, deletes a specific place
router.route('/place/:placeId')
  .get(getPlace)
  .put(updatePlace)
  .delete(deletePlace);

//This route gets all places, adds a place
router.route('/place')
  .get(PlaceController)
  .post(addPlace);

//This route gets a specific shopping place, updates a specific shopping place, delets a specific shopping place
router.route('/shopping/:placeId')
  .get(getShoppingPlace)
  .put(updateShoppingPlace) 
  .delete(deleteShoppingPlace);

//This route gets all shopping places, adds a shopping place
router.route('/shopping')
  .get(ShoppingController) 
  .post(addShoppingPlace);

router.route('/events/:placeId')
  .get(getEventPlace)
  .put(updateEventPlace) 
  .delete(deleteEventPlace);

router.route('/events')
  .get(EventController) 
  .post(addEventPlace);

router.route('/sights/:placeId')
  .get(getSightPlace)
  .put(updateSightPlace) 
  .delete(deleteSightPlace);

router.route('/sights')
  .get(SightController) 
  .post(addSightPlace);

export default router;
