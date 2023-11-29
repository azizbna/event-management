import { eventsCollection } from '../models/events.model.js';

const getAllEvents = (req, res) => {
    eventsCollection
        .find({})
        .toArray()
        .then(allEvents => {
            res.json(allEvents);
        })
}

export {getAllEvents}