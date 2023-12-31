const User = require('../modeles/User');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');




exports.login = ((req, res) => {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: jsonWebToken.sign(
                                {userId: user._id},
                                'RANDOM_TOKEN_SECRET',
                                {expiresIn : "24h"}
                            )
                        });
                    })
                    .catch(error => res.status(500).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    })
     
