function handleKeydown(e, setCurrentFocusedTab, currentFocusedTab, tabRef) {
  const ARROWRIGHT = "ArrowRight";
  const ARROWLEFT = "ArrowLeft";

  if (e.key == ARROWRIGHT) {
    setCurrentFocusedTab((prevValue) => (prevValue + 1) % 4);
  } else if (e.key == ARROWLEFT) {
    setCurrentFocusedTab((prevValue) => (prevValue + 3) % 4);
  }

  tabRef.current.focus();
}

export default handleKeydown;
