import express from 'express';
const router = express.Router();


import {getAllEvents} from '../controllers/eventsController.js'

router.route('/')
    .get(getAllEvents)


export{router}