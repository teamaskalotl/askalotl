const path = require('path')
const { ContextExclusionPlugin } = require('webpack')
const db = require(path.join(__dirname, '../models/axolotl-models'))

const advice_controller = {}

let cache = {};

advice_controller.getLotlAdvice = (req, res, next) => {
    //build out randomizer to check the size of the table
    const maxQuery = `SELECT _id FROM neutralResponse ORDER BY _id DESC LIMIT 1`;
    db.query(maxQuery)
        .then((result) => {
            const max = result.rows[0]._id;
            const query = `SELECT response FROM neutralResponse WHERE _id = $1`;
            let idNum = Math.ceil(Math.random() * max);
            //clear cache if length of keys array is = max
            if (Object.keys(cache).length == max) cache = {};
            //do another random generation if idNum is already in cache
            while (cache[idNum]){
                idNum = Math.ceil(Math.random() * max)
            }
            cache[idNum] = true;
            console.log(cache);
            db.query(query, [idNum])
                .then(data => {
                    // console.log(data);
                    res.locals.advice = data.rows[0].response;
                    return next();
                })
                .catch((e) => {
                    return next({
                        log: "Error occcurred in advice_controller.getLotlAdvice",
                        message: { e: "An error occurred" }
                    })
                })
        })
        .catch((e) => {
            return next({
                log: "Error occcurred in advice_controller.getLotlAdvice",
                message: { e: "An error occurred" }
            })
        })
}


module.exports = advice_controller;