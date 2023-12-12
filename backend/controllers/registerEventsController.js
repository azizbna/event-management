import { registrationsCollection } from '../models/registerEvents.model.js';

class User {
    constructor(id, firstName, lastName, email, telephone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
    }
}

const registerForEvent = (req, res) => {
    const eventId = req.params.eventId;

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
