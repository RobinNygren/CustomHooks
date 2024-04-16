import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import "./CounterComponent.scss";

type CounterComponentProps = {
  initialValue: number;
  maxValue: number;
  minValue: number;
};

const CounterComponent: React.FC<CounterComponentProps> = ({
  initialValue,
  maxValue,
  minValue,
}) => {
  const [step, setStep] = useState<number>(10);
  const {
    count,
    isEven,
    increment,
    incrementByStep,
    decrement,
    decrementByStep,
    reset,
    setToMax,
    setToMin,
  } = useCounter(initialValue, maxValue, minValue, step);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementByStep}>Increment by {step}</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementByStep}>Decrement by {step}</button>
      <button onClick={reset}>Reset</button>
      <button onClick={setToMax}>Set to Max({maxValue})</button>
      <button onClick={setToMin}>Set to Min({minValue})</button>
      <div>
        <label>
          Step:{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default CounterComponent;
