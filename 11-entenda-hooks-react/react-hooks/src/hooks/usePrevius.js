import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---");

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
