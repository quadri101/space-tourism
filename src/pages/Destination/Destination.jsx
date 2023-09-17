import { useEffect } from "react";

function Destination() {
  useEffect(() => {
    document.querySelector("body").className = "destination";
  }, []);

  return <div>Destination</div>;
}

export default Destination;
