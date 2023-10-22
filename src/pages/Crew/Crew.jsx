import React, { useState } from "react";
import useBodyClass from "../../hooks/useBodyClass";
import { crew as data } from "../../data/data.json";

import "./Crew.css";

const crew = [
  { role: "Commander", id: 0 },
  { role: "Mission Specialist", id: 1 },
  { role: "Pilot", id: 2 },
  { role: "Flight Engineer", id: 3 },
];
function Crew() {
  useBodyClass("crew");

  const [currentTab, setCurrentTab] = useState("Commander");
  const { name, images, role, bio } = data.find(
    (element) => element.role === currentTab
  );

  return (
    <main className="grid-container grid-container--crew" id="main">
      <h1 className="numbered-title">
        <span aria-hidden={"true"}>02</span>meet your crew
      </h1>

      <picture>
        <source srcSet={`${images.webp.substring(1)} 1x `} type="image/webp" />
        <img alt={`the ${name}`} src={images.png.substring(1)} />
      </picture>
      <div className="dot-indicators flex">
        {crew.map((member) => (
          <button
            onClick={() => setCurrentTab(member.role)}
            aria-selected={member.role == currentTab}
            key={member.id}
          >
            <span className="sr-only">{role}</span>
          </button>
        ))}
      </div>

      <article className="crew-info flow">
        <div>
          <h2 className="ff-serif fs-600 uppercase">{role}</h2>
          <p className="ff-serif fs-700 uppercase">{name}</p>
        </div>
        <p className="text-accent">{bio}</p>
      </article>
    </main>
  );
}

export default Crew;
