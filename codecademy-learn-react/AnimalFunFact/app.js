import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const showBackground = true;

const displayFact = (e) => {
  const selectedAnimal = e.target.alt;
  const animal = animals[selectedAnimal];
  const randomFact = Math.floor(Math.random() * animal.facts.length);
  const funFact = animal.facts[randomFact];
  document.getElementById("fact").innerHTML = funFact;
};

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground === true && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
