const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('', (req,res) => {
  res.send('API is running');
})
require('./routes')(app);
global.models = require('./models/index');


app.listen(process.env.PORT || 8000, () => {
    console.log("Server running");
});



