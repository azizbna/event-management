import express from 'express';
const router = express.Router();


import {registerForEvent} from '../controllers/registerEventsController.js'

router.route('/')  
   
    .post(registerForEvent)



     
   
    

export{router}