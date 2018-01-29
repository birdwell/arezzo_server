// v.0.0.1
// Author: Josh Birdwell, Emily Black
// Date: 1/25/18

import { Router } from 'express';
import PlaceController, { addPlace, updatePlace, getPlace, deletePlace } from './controllers/PlaceController';

const router = Router();

//GET = gets data
//POST = adds data
//PUT = updates data
//DELETE = deletes data

// This route gets a specific place, updates a specific place, deletes a specific place
router.route('/PlaceController/:placeId')
  .get(getPlace)
  .put(updatePlace)
  .delete(deletePlace);

// This route gets all places, adds data
router.route('/PlaceController')
  .get(index)
  .post(addPlace);

export default router;
