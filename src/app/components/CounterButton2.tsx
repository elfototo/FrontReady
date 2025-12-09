"use client";
import { useState } from "react";

export default function CounterButton2() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center">
      <div className="grid gap-5">
        <div className="grid grid-cols-2 gap-5">
          <button
            className="px-3 py-2 bg-blue-400 text-white rounded-lg"
            onClick={() => setCount((prev) => prev + 1)}
          >
            count + 1
          </button>
          <button
            className="px-3 py-2 bg-gray-100 rounded-lg"
            onClick={() => setCount(0)}
          >
            Сброс
          </button>
        </div>

        <h2 className="w-full bg-blue-100 p-2">Count: {count}</h2>
      </div>
    </div>
  );
}
