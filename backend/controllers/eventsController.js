import { eventsCollection } from '../models/events.model.js';

const getAllEvents = (req, res) => {
    eventsCollection
        .find({})
        .toArray()
        .then(allEvents => {
            res.json(allEvents);
        })
}

const addEvent = (req, res) => {
    const newEvent = {
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
    }
    eventsCollection
        .insertOne(newEvent)
        .then(dbRes => {
            res.json(dbRes);
        })
}
export {getAllEvents, addEvent}