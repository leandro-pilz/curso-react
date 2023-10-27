import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const AboutPage = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>VAlor do contador: {counter}</p>
    </div>
  );
};

export default AboutPage;
