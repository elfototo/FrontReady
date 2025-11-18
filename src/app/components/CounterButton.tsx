"use client";

import { useState } from "react";

export default function CounterButton() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-auto mb-5 grid grid-cols-2 grid-rows-1 gap-5 py-2 px-3">
        <button
          className="bg-gray-200 p-3 cursor-pointer"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Счетчик +1
        </button>
        <button
          className="border-1 border-gray-200 py-2 px-3 cursor-pointer"
          onClick={() => setCounter(0)}
        >
          Сброс
        </button>
      </div>
      <div>Счетчик: {counter}</div>
    </div>
  );
}
