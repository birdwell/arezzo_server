import Event from '../model/Event';

const index = (req, res) => {
  Event.find({}, null, {}, (err, events) => (
    res.json(events)
  ));
};

export const addEvent = (req, res) => {
  const { body: { title, location, date }} = req;
  
  
  const event = new Event({ title, date, location });
  
  event.save(function (err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send('Event successfully created.');
    }
  });
}

export default index;