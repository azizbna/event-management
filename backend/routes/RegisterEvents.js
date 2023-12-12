import express from 'express';
const router = express.Router();


import {registerForEvent} from '../controllers/registerEventsController.js'

router.route('/')  
<<<<<<< Updated upstream
   
    .post(registerForEvent)



=======
    .post(registerForEvent)
>>>>>>> Stashed changes
     
   
    

export{router}