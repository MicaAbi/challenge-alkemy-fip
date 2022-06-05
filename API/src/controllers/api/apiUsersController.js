const db = require("../../database/models");
const bcrypt = require('bcryptjs');

const apiUsersConstroller = {
    login: async (req, res) => {
        const {email, password} = req.body;

        const userFound = await db.User.findOne({where: {email: email}})
            .then(user => {
                return user;
            })

        if (userFound) {

            const validation = bcrypt.compareSync(password, userFound.password)

            if(validation) {
                req.session.user = {
                    email: userFound.email,
                    name: userFound.name
                };
                console.log(req.session.user);
    
                res.status(200).json({
                    meta: {
                        status: 200,
                        msg: 'Successful login'
                    }
                });
            } else {
                res.send('Credenciales inválidas');
            };

        } else {
            res.send('Credenciales inválidas');
        };

    },

    register: async (req, res) => {

        await db.User
        .create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })
        .then(newUser => {
            res.status(200).json({
                meta: {
                    status: 200,
                    msg: 'Success'
                },
                data: {
                    user: newUser
                }
            })
        })
        .catch(e => {
            res.json(e);
        })
    }
};

module.exports = apiUsersConstroller;