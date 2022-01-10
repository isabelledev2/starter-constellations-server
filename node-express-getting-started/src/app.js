const express = require("express"); //You require the Express package and assign it to a variable.
const app = express();              /*The Express package exports a function. When you invoke that function, you get a new 
                                    Express application and assign it to a variable.*/
const morgan = require("morgan");


//All Functions
const sayHello = (req, res) => { //first middleware function that logs onto the page
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
  };

  const saySomething = (req, res) => {
    const greeting = req.params.greeting; //built for a greeting
    const name = req.query.name;
  
    const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`; //Built to say whatever you put in the function
    res.send(content);
  };

  const sayGoodbye = (req, res) => { //a goodbye function handler
    res.send("Sorry to see you go!");
  };

//Router-level middleware, parent function
  const checkForAbbreviationLength = (req, res, next) => {
    const abbreviation = req.params.abbreviation;
    if (abbreviation.length !== 2) {
      next("State abbreviation is invalid.");
    } else {
      next();
    }
  };

  //function for state, references parent function
  app.get(
    "/states/:abbreviation",
    checkForAbbreviationLength,
    (req, res, next) => {
      res.send(`${req.params.abbreviation} is a nice state, I'd like to visit.`);
    }
  );
  
  //function for travel, references parent function
  app.get(
    "/travel/:abbreviation", 
    checkForAbbreviationLength,
    (req, res, next) => {
      res.send(`Enjoy your trip to ${req.params.abbreviation}!`);
    }
  );
  

  //No Route Handler
  app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`);
  });
  
  //Error handler
  app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
  });
  
  

  //All Routes
app.get("/say/goodbye", sayGoodbye);  //this goes first because it would default to the second one otherwise
app.get("/say/:greeting", saySomething); //this goes second because it takes in any default parameter
app.use(morgan("dev")); //The callback functions for the middleware
app.get('/hello', sayHello); //responds to a specific route. If a client uses Localhost5000/hello, sayHello function will run on that page.




module.exports = app;               //You export the Express application to be used in the server.js file
