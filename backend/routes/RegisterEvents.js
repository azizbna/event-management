import express from 'express';
const router = express.Router();
import {registerForEvent} from '../controllers/registerEventsController.js'


router.route('/')  
   
    .post(registerForEvent)
    //get all users for an event
  

     
   
    

export{router}