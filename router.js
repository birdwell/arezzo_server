import { Router } from 'express';
import events, { addEvent, updateEvent, getEvent } from './controllers/events';

const router = Router();

router.route('/events/:eventId')
  .get(getEvent)
  .post(addEvent)
  .put(updateEvent);

router.route('/events')
  .get(events);

export default router;
