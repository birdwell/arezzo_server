// v.0.0.1
// Author: Josh Birdwell, Emily Black
// Date: 1/29/18

import { Router } from 'express';
import PlaceController, { addPlace, updatePlace, getPlace, deletePlace } from './controllers/PlaceController';
import ShoppingController, { getShoppingPlace, updateShoppingPlace, deleteShoppingPlace, addShoppingPlace } from './controllers/ShoppingController';

const router = Router();

//GET = gets data
//POST = adds data
//PUT = updates data
//DELETE = deletes data

//This route gets a specific place, updates a specific place, deletes a specific place
router.route('/place/:placeId')
  .get(getPlace) //WORKS
  .put(updatePlace)
  .delete(deletePlace); //WORKS

//This route gets a specific shopping place, updates a specific shopping place, deletes a specific shopping place 
router.route('shop/:placeId')
  .get(getShoppingPlace)
  .put(updateShoppingPlace)
  .delete(deleteShoppingPlace);

//This route gets all places, adds a place
router.route('/place')
  .get(PlaceController) //WORKS
  .post(addPlace);

//This route gets all shopping places, adds a shopping place
router.route('/shop')
  .get(ShoppingController)
  .post(addShoppingPlace);

export default router;
