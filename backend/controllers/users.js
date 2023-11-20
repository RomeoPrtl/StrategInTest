const User = require('../modeles/User');


exports.users = ((req, res) => {
    User.find()
    .then(users => res.status(200).json({users}))
    .catch(error => res.status(500).json({error}))
});