import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleBreedChange = (event) => setBreed(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
        console.log(name, breed, age);
        setName("");
        setBreed("");
        setAge("");
  };
  
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Dog's Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label htmlFor="breed">
          Your Dog's Breed:
          <input
            id="breed"
            type="text"
            name="breed"
            onChange={handleBreedChange}
            value={breed}
          />
        </label>
        <label htmlFor="age">
          Your Dog's Age:
          <input
            id="age"
            type="text"
            name="age"
            onChange={handleAgeChange}
            value={age}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
  

export default DogForm;
