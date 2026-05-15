"use client";

import {useState} from "react";

export default function CounterButton2() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-lg">
      <button className="cursor-pointer px-3 py-2  rounded bg-blue-400 text-white" onClick={() => setCount((prev) => prev + 1)}>count + 1</button>
      <p className="mt-10 p-10 border border-gray-300 rounded w-full text-center">{count}</p>
    </div>
  )
}