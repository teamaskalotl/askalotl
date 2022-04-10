const path = require('path')
const { ContextExclusionPlugin } = require('webpack')
const db = require(path.join(__dirname, '../models/axolotl-models'))

const user_controller = {};

user_controller.addUser = (req, res, next) => {
    const query = `INSERT INTO users (username, password, name, sign, vibe)
                   VALUES ($1, $2, $3, $4, $5)
                   RETURNING name`
    const { username, password, name, sign, vibe } = req.body;

    db.query(query, [username, password, name, sign, vibe])
        .then(data => {
            res.locals.name = data.rows[0].name;
            return next()
        })
        .catch((e) => {
            return next({
                log: "Error occcurred in user_controller.addUser",
                message: { e: "An error occurred" }
            })
        })
}

user_controller.getUser = (req, res, next) => {
    const query = `SELECT name FROM users WHERE username = $1 AND password = $2`;
    const { username, password } = req.params;

    db.query(query, [username, password])
        .then(data => {
            res.locals.name = data.rows[0].name;
            return next()
        })
        .catch((e) => {
            return next({
                log: "Error occurred in user_controller.getUser",
                message: { e: "An error occurred" }
            })
        })
}

module.exports = user_controller;