import { Router } from 'express';
import index, { addEvent, updateEvent, findEvent } from './controllers/events';

const router = Router();

router.route('/events/:eventId')
  .get(findEvent);

router.route('/events')
  .get(index);

router.route('/addevent')
  .post(addEvent);

router.route('/updateevent')
  .put(updateEvent);

export default router;
