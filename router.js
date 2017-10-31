import { Router } from 'express';
import index, { addEvent } from './controllers/events';

const router = Router();

router.route('/events')
  .get(index);

router.route('/addevent')
  .post(addEvent);

export default router;
