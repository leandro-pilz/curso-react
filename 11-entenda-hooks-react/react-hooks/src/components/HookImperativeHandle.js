import { useRef } from "react";

import SomeComponent from "./SomeComponent";

const HookImperativeHandle = () => {
  const inputRef = useRef();
  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validate</button>
    </div>
  );
};

export default HookImperativeHandle;
