import { useEffect } from "react";

function useBodyClass(className) {
  useEffect(() => {
    document.querySelector("body").className = className;
  }, []);
}

export default useBodyClass;
