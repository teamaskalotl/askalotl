const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');
const advice_controller = require('./controllers/advice_controller');

//receive requests here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/advice', advice_controller.getLotlAdvice, (req, res) => {
    //send back data pulled from table that's saved on res.locals
    res.status(200).json(res.locals.advice)
})



// catch-all route handler for requests made to unknown route
app.use((req, res) => res.status(404).send('Request sent to unknown page'));

//error handling (standard & global)
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occured'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.stats).json(errorObj.message);
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
module.exports = app;