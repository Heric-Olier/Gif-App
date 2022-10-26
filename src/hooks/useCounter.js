import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    counter > 0 && setCounter(counter - 1); // Si counter es mayor a 0, entonces decrementa en 1
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
