const User = require('../modeles/User');
const bcrypt = require('bcrypt');




exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
       const user = new User({
        email: req.body.email,
        password: hash
       });
       user.save()
       .then(() => res.status(201).json({message: "utilisateur crée"}))
       .catch(error => res.status(400).json({error}))
       
    })
    .catch(error => res.status(500).json({error}));
};
