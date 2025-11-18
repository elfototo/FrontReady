"use client";
import { useState } from "react";

export default function ToggleBtn() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <main className="max-w-[1200px] relative font-sans mx-auto">
      <div className="flex items-center justify-center">
        <div>
          <button
            className={`py-2 px-3 cursor-pointer ${toggle ? "bg-green-300" : "bg-red-400"}`}
            onClick={handleToggle}
          >
            {toggle ? "Включено" : "Выключено"}
          </button>
        </div>
      </div>
    </main>
  );
}
