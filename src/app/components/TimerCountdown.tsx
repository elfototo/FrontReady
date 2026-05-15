"use client";
import { useState, useEffect, useRef } from "react";

export default function TimerCountdown() {
  const [inputValue, setInputTimer] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
          }
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const start = () : void => {
    if (secondsLeft === 0) {
        const value = Number(inputValue);
        if(!Number.isFinite(value) || value <= 0) return;
        setSecondsLeft(value);
    }

    setIsRunning(true);
  }

  const pause = () : void => {
    setIsRunning(false);
    if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
    }
  }

  const reset = () : void => {
    setIsRunning(false);
    if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
    }
    setInputTimer("");
    setSecondsLeft(0);
  }

  return (
    <div className="w-[500px] border border-gray-300 rounded p-10">
      <input
        type="number"
        className="border border-gray-300 rounded w-full px-3 py-2"
        placeholder="seconds"
        value={inputValue}
        onChange={(e) => setInputTimer(e.target.value)}
        disabled={isRunning}
      />
      <div className="text-2xl bold p-5 text-center w-full">{secondsLeft} sec</div>
      <div className="grid grid-cols-3 gap-2">
        <button className="px-3 py-2 bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-300" onClick={start}>
            Start
        </button>
        <button className="px-3 py-2 bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-300" onClick={pause}>
            Pause
        </button>
        <button className="px-3 py-2 bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-300" onClick={reset}>
            Reset
        </button>
      </div>
    </div>
  );
}
