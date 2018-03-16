// set express to require express library
const express = require('express');
// run express as a function to generate new express application
const app = express();

// set route handler
// app object represents the underlying running express server
// express server has some number of route handlers associated with it - RESTful
// call .get creates new route handler to watch for incoming http requests
// ('/') .get watches for requests trying to access this
// req object represents the incoming request
// res object represents the outgoing response
// res.send sends response (some JSON) back to whoever made the request
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
})

// set local host to 5000?
app.listen(5000);