"use client";
import { useState } from "react";

export default function SearchFilterList() {
  const [char, setChar] = useState("");
  const items = ["Mery", "Elizabeth", "Max", "Kaleb"];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setChar(value);
  };

  const filtered = items.filter((i) =>
    i.toLowerCase().includes(char.toLowerCase())
  );

  return (
    <div>
      <input
        className="p-2 border border-gray-300 rounded-lg"
        placeholder="...search"
        onChange={handleSearch}
      />
      <ul>
        {filtered.length === 0
          ? "нет результатов"
          : filtered.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
