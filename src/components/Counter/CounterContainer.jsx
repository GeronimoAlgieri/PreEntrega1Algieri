import { useEffect, useState } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : alert("maximo");
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
