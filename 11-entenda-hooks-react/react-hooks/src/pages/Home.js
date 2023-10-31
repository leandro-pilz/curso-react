import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

//useContext
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayouEffect from "../components/HookUseLayouEffect";
import HookImperativeHandle from "../components/HookImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayouEffect />
      <HookImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;
