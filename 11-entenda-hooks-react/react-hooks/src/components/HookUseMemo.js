import { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  // const premimumNumbers = ["0", "100", "200"];
  const premimumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium numbers foi alterado!");
  }, [premimumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premimumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
