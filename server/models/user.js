const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    //Define the schema of your document
});

//Define both Model and Instance methods of this model here


//Define your database event schema here: i.e. pre. before saving the details into the db

var User = mongoose.model('User', UserSchema);
module.exports = {
    User
}