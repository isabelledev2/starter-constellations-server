

function getCountries() {                             //set up async function
    fetch("https://restcountries.com/v2/all")         //fetch the API url
    .then((response) => response.json())              //then the response to the request happens with json
    .then((data) => console.log(data.map(country => { //using json to create a object then taking the retrieved data and logging it using map to create a new array of the data.
      let {name, region, population} = country        //reestablish what you want country parameter to look like with let
  
      return `${name} is located in ${region} and has a population of ${population}` //format the data return
    }).slice(0, 5)))                                  //slices the data to return only 5 items in the array
    .catch((err) => console.error(err))               //retuns error if there is one
  }
  getCountries()                                      //call the function to get the array