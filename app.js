// CREATE EXPRESS APP
const express = require("express");

const morgan = require("morgan");

// Here you should create your Express app:

const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());

// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

app.get('/', (req, res) => { //Iteración 3

    res.sendFile(__dirname + '/views/home.html');
}); 

app.get('/blog', (req, res) => { //Iteración 4

    res.sendFile(__dirname + '/views/blog.html');
}); 

app.get('/api/projects', (req, res) => {

    res.sendFile(__dirname + '/data/projects.json'); 
});

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => console.info("Server listening at port 5005"));

/*
Create a route GET /api/projects that responds back with the JSON data from the file data/projects.json.
The purpose of this route is to provide the JSON data for the home.html page, which requests and renders it in the My Projects section as a list.

You will need to import the file data/projects.json in app.js.


To test the route, navigate to localhost:5005/api/projects in your browser.
If you set up the route correctly, you should see the JSON data with projects sent in the response.

*/



