//EXPRESS
import express from 'express';
const app = express();

//CONTROLLERS
import {router as eventsRouter} from './routes/Events.js';
import {router as registerEventsRouter} from './routes/RegisterEvents.js';


// JSON DATA HANDLING MIDDLEWARE
import bodyParser from 'body-parser';
app.use(bodyParser.json());

//CORS MIDDLEWEAR
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200" || req.headers.origin );// Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/*ROUTING*/
app.use('/events',eventsRouter);
app.use('/registerEvents',registerEventsRouter);


app.listen(3000,()=>{
    console.log("Listening on port 3000");
});