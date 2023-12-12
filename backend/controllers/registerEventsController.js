<<<<<<< Updated upstream
import { registrationsCollection } from '../models/registerEvents.model.js';

class User {
=======
// registerEventsController.js
import { registrationsCollection } from '../models/registerEvents.model.js';

class Inscription {
>>>>>>> Stashed changes
    constructor(id, firstName, lastName, email, telephone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
<<<<<<< Updated upstream
=======
        // Add other fields as needed
>>>>>>> Stashed changes
    }
}

const registerForEvent = (req, res) => {
    const eventId = req.params.eventId;
<<<<<<< Updated upstream

    // Supposons que req.body contient les détails de l'utilisateur
    const userDetails = req.body.userDetails;

    const user = new User(
        userDetails.id,
        userDetails.firstName,
        userDetails.lastName,
        userDetails.email,
        userDetails.telephone
    );

    const registration = {
        eventId: eventId,
        user: user,
    };

    // Ajoutez cette inscription à la collection des inscriptions
=======
    const userId = req.body.userId;

    // Assuming req.body contains the registration details
    const registrationDetails = req.body.registrationDetails;

    const registration = {
        eventId: eventId,
        userId: userId,
        registrationDetails: registrationDetails,
        // You can include more registration details if needed
    };

    // Assuming registrationsCollection.insertOne expects the entire registration object
>>>>>>> Stashed changes
    registrationsCollection
        .insertOne(registration)
        .then(dbRes => {
            res.json(dbRes);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
};

<<<<<<< Updated upstream
const getUsersForEvent = (req, res) => {
    const eventId = req.params.eventId;

    // Recherche des utilisateurs inscrits à l'événement spécifié
    registrationsCollection
        .find({ eventId: eventId })
        .toArray()
        .then(registrations => {
            const users = registrations.map(registration => registration.user);
            res.json(users);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
};

export { registerForEvent, getUsersForEvent, User };
// Path: backend/routes/Registrations.js
=======
export { registerForEvent, Inscription };
>>>>>>> Stashed changes
