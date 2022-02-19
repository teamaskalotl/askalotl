const path = require('path')
const { ContextExclusionPlugin } = require('webpack')
const db = require(path.join(__dirname, '../models/axolotl-models'))

const advice_controller = {}

advice_controller.getLotlAdvice = (req, res, next) => {
    const query = `SELECT response FROM neutralResponse WHERE _id = $1`;
    const idNum = Math.ceil(Math.random() * 6);
    //do we need idNum to be a string instead???
    db.query(query, [idNum])
        .then(data => {
            console.log(data);
            res.locals.advice = data.rows[0].response;
            return next();
        })
        .catch((e) => {
            return next({
                log: "Error occcurred in advice_controller.getLotlAdvice",
                message: { e: "An error occurred" }
            })
        })
}


module.exports = advice_controller;