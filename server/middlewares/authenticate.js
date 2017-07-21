var authenticate = (req, res, next) => {
    //in this function get a token header and then criss check it to be sure it is genuine and if so call next 
    /*
        if(true){ next() }
        else {res.status(401).send()}
    */
};

//Export the authenticate so we can use it in the other files like server.js
module.exports = {
    authenticate
}