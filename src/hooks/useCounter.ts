import { useEffect, useState } from "react";

type UseCounterReturn = {
  count: number;
  isEven: boolean;
  increment: () => void;
  incrementByStep: () => void;
  decrement: () => void;
  decrementByStep: () => void;
  reset: () => void;
  setToMax: () => void;
  setToMin: () => void;
};

const useCounter = (
  initialValue: number,
  maxValue: number,
  minValue: number,
  step: number
): UseCounterReturn => {
  const [count, setCount] = useState<number>(initialValue);
  const [isEven, setIsEven] = useState<boolean>(initialValue % 2 === 0);

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  const increment = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const incrementByStep = () => {
    setCount((current) => Math.min(current + step, maxValue));
  };

  const decrement = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  const decrementByStep = () => {
    setCount((current) => Math.max(current - step, minValue));
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setToMax = () => {
    setCount(maxValue);
  };

  const setToMin = () => {
    setCount(minValue);
  };

  return {
    count,
    isEven,
    increment,
    incrementByStep,
    decrement,
    decrementByStep,
    reset,
    setToMax,
    setToMin,
  };
};

export default useCounter;
