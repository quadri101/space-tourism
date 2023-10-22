import { useState, useRef } from "react";
import useBodyClass from "../../hooks/useBodyClass";
import { destinations as data } from "../../data/data.json";
import "./Destination.css";
import handleKeydown from "../../utils/tabOnKeydown";

const buttons = [
  { name: "Moon", id: 0 },
  { name: "Mars", id: 1 },
  { name: "Europa", id: 2 },
  { name: "Titan", id: 3 },
];

function Destination() {
  useBodyClass("destination");
  const [currentTab, setCurrentTab] = useState("Moon");
  const [currentFocusedTab, setCurrentFocusedTab] = useState(0);

  const tabRef = useRef();
  const { name, images, description, distance, travel } = data.find(
    (element) => element.name === currentTab
  );
  console.log(currentFocusedTab);
  return (
    <main className="grid-container grid-container--destination" id="main">
      <h1 className="numbered-title">
        <span aria-hidden={"true"}>01</span>Pick your destination
      </h1>

      <picture>
        <source srcSet={`${images.webp.substring(1)} 1x`} type="image/webp" />
        <img alt={name} src={images.png.substring(1)} />
      </picture>

      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        onKeyDown={(e) =>
          handleKeydown(e, setCurrentFocusedTab, currentFocusedTab, tabRef)
        }
      >
        {buttons.map((button) => (
          <button
            role="tab"
            aria-selected={button.name == currentTab}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            key={button.id}
            tabIndex={currentFocusedTab == button.id ? -1 : 0}
            ref={currentFocusedTab == button.id ? tabRef : null}
            onClick={() => setCurrentTab(button.name)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <article className="destination-info">
        <h2 className="ff-serif fs-800 uppercase">{name}</h2>
        <p>{description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif fs-500 uppercase">{distance}</p>
          </div>

          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif fs-500 uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Destination;
