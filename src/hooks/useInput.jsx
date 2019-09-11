import { useState } from "react";

function useInput(initValue) {
  const [state, setState] = useState(initValue);
  function handleChange(e) {
    setState(e.target.value);
  }
  function clearInput() {
    setState("");
  }
  return [state, handleChange, clearInput];
}

export default useInput;
