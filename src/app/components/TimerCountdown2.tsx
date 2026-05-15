"use client";

import { useState, useEffect, useRef } from "react";

export default function TimerCountdown2() {
  const [secondLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const refInterval = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    refInterval.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (refInterval.current !== null) {
            clearInterval(refInterval.current);
          }

          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (refInterval.current !== null) {
        clearInterval(refInterval.current);
      }
    };
  }, [isRunning]);

  const start = (): void => {
    if (secondLeft === 0) {
      const value = Number(inputValue);
      if (!Number.isFinite(value) || value <= 0) return;
        setSecondsLeft(value);
    }

    setIsRunning(true);
  };

  const pause = (): void => {
    setIsRunning(false);
    if (refInterval.current !== null) {
      clearInterval(refInterval.current);
    }
  };

  const reset = (): void => {
    setIsRunning(false);
    if (refInterval.current !== null) {
      clearInterval(refInterval.current);
    }
    setInputValue("");
    setSecondsLeft(0);
  };

  return (
    <div className="border border-gray-300 rounded w-xl p-10">
      <div className="flex mb-10 items-baseline gap-3 w-full justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
          disabled={isRunning}
          placeholder="seconds"
        />
      </div>

      <div className="text-center text-2xl mb-10">{secondLeft} sec</div>
      <div className="flex justify-between">
        <button
          className="bg-blue-200 rounded px-3 py-2 cursor-pointer"
          onClick={start}
        >
          start
        </button>
        <button
          className="bg-blue-200 rounded px-3 py-2 cursor-pointer"
          onClick={pause}
        >
          pause
        </button>
        <button
          className="bg-blue-200 rounded px-3 py-2 cursor-pointer"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
}
