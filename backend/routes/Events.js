import express from 'express';
const router = express.Router();


import {addEvent, getAllEvents} from '../controllers/eventsController.js'

router.route('/')
    .get(getAllEvents)
    .post(addEvent)
    

export{router}