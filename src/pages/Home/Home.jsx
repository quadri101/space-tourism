import { useEffect } from "react";
import LargeButton from "../../components/LargeButton";

function Home() {
  // Set the Body Class so I can use it to modify the background image

  useEffect(() => {
    document.querySelector("body").className = "home";
  }, []);

  return (
    <div className="grid-container">
      <div>
        <h1 className="uppercase fs-500 ff-sans-cond letter-spacing-1 text-accent">
          So, you want to travel to{" "}
          <span className="ff-serif fs-900 text-white block">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <LargeButton to={"destination"}>explore</LargeButton>
      </div>
    </div>
  );
}

export default Home;
