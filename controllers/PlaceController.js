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

export const getEvent = (req, res) => {
  const { params: { eventId } } = req;
  Event.findById(eventId, function (err, doc) {
    if (err) {
      res.status('500').send('Could not find event.');
    }
    res.json(doc);
  });
}

export const updateEvent = (req, res) => {
  const { body: { fields }, params: { eventId }} = req;
  
  Event.findByIdAndUpdate(eventId, { ...fields }, (err, result) => {
    res.json(result);
  })
}

export default index;