"use client";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  const reset = () => {
    setValue(0)
  }

  return (
    <div className="grid gap-4">
      <div className="flex gap-5 items-center">
        <button type="button" className="bg-white w-5 h-5 rounded-sm" onClick={decrement}>
          -
        </button>

        <div className="font-bold text-2xl text-white">{value}</div>

        <button type="button" className="bg-white w-5 h-5 rounded-sm" onClick={increment}>
          +
        </button>
      </div>

      <button type="reset" className="bg-red-400 text-white rounded-sm w-full" onClick={reset}>Reset</button>
    </div>
  );
}
