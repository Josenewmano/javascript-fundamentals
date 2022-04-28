// Load the 'got' function
const got = require('got');

// Create a "handler" callback function.

  // -----------------------------------------------
  // const handleReceivedResponse = (response) => {
  //   console.log(response.body);
  // }
  // -----------------------------------------------

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call 'got' and provide the handler callback function.
// This will get called by 'got' when the response is received.

  // -----------------------------------------------
  // got(url).then(handleReceivedResponse);
  // -----------------------------------------------

// We can also rewrite the above using a shorter version,
// by defining the "handler" function as a anonymous function


// Prints JSON string to console log:

  // -----------------------------------------------
  // got(url)
  //   .then((response) => {
  //     console.log(response.body);
  //   });
  // -----------------------------------------------



    got(url)
    .then((response) => {
      const objectValue = JSON.parse(response.body);
      console.log(objectValue);
    });

// Option 2:

    // -----------------------------------------------
    // const handleReceivedResponse = (response) => {
    //   const responseObject = JSON.parse(response.body)
    //   console.log(responseObject);
    // }
    // -----------------------------------------------

    // -----------------------------------------------
    // got(url).then(handleReceivedResponse);
    // -----------------------------------------------


  // Parse string value into an object using JSON.parse:

    // -----------------------------------------------
    // const stringValue = '{ "name": "John" }';
    // const objectValue = JSON.parse(stringValue);
    // console.log(objectValue.name);
    // -----------------------------------------------


