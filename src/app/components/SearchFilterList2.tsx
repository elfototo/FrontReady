"use client";
import { useState } from "react";

export default function SearchFilterList2() {
  const [value, setValue] = useState("");
  const namesList: string[] = ["Lisa", "Maksim", "Lena", "John"];

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filtered = namesList.filter((name) => name.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className="flex items-center justify-center mx-auto">
      <div>
        <input
          className="p-2 border border-gray-300 rounded-lg"
          value={value}
          onChange={handleOnChange}
          name="search"
          placeholder="...search"
          type="text"
        />
        <ul>
          {filtered.map((name) => (
            <li className="p-2" key={name}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
