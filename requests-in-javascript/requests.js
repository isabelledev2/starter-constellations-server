const axios = require ["axios"];
const url = "http://localhost:5000/constellations";

const leo = {
    name: "Leo",
      meaning: "Lion",
      starsWithPlanets: 19,
      quadrant: "NQ2"
};

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios.post(constellationsUrl, leo);
  })
  .then(({ data }) => console.log(data))
  .catch(console.log);