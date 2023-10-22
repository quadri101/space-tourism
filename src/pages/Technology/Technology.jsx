import { useState } from "react";
import useBodyClass from "../../hooks/useBodyClass";
import { technology as data } from "../../data/data.json";

const technology = [
  {
    number: 1,
    name: "Launch vehicle",
  },
  {
    number: 2,
    name: "Spaceport",
  },
  {
    number: 3,
    name: "Space capsule",
  },
];

import "./Technology.css";
function Technology() {
  const [currentTab, setCurrentTab] = useState("Launch vehicle");

  const { name, images, description } = data.find(
    (element) => element.name === currentTab
  );

  useBodyClass("technology");
  return (
    <main className="grid-container--technology grid-container" id="main">
      <h1 className="numbered-title">
        <span aria-hidden={"true"}>02</span>meet your crew
      </h1>

      <picture>
        <source
          media="(min-width:50rem)"
          srcSet={`${images.portrait.substring(1)} 1x `}
          type="image/webp"
        />
        <img alt={`the ${name}`} src={images.landscape.substring(1)} />
      </picture>
      <div className="numbered-indicators grid">
        {technology.map((button) => (
          <button
            onClick={() => setCurrentTab(button.name)}
            aria-selected={currentTab == button.name}
            className="fs-600 ff-serif"
          >
            {button.number}
          </button>
        ))}
      </div>
      <article className="technology-info flow">
        <p className="text-accent uppercase ff-sans-cond letter-spacing-2">
          the terminology ...
        </p>
        <h1 className="fs-700 ff-serif uppercase">{name}</h1>
        <p>{description}</p>
      </article>
    </main>
  );
}

export default Technology;
