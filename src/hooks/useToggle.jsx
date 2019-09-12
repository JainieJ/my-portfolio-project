import { useState } from "react";

function useToggle(initVal) {
  const [state, setState] = useState(initVal);
  function setToggleValue() {
    setState(!state);
  }
  function close() {
    setState(false);
  }
  return [state, setToggleValue, close];
}

export default useToggle;
