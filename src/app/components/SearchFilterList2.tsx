"use client";

import { useState, useRef, useEffect } from "react";

const data = [
  "orange",
  "apple",
  "banana",
  "eggplant",
  "avocado",
  "tomato",
  "cucumber",
  "coconat",
];

export default function SearchFilterList2() {
  const [filtered, setFiltered] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hilightIndex, setHilightIndex] = useState(-1);
  const [value, setValue] = useState("");

  const refContainer = useRef<HTMLDivElement | null>(null);
  const refTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }

    refTimeout.current = window.setTimeout(() => {
      if (value.trim() === "") {
        setIsOpen(false);
        setFiltered([]);
        return;
      }
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered(filtered);
      setIsOpen(true);
      setHilightIndex(-1);
    }, 800);

    return () => {
      if(refTimeout.current) {
        clearTimeout(refTimeout.current);
      }
    }
  }, [data, value]);

  useEffect(() => {
    function handlerClickOutside(e: MouseEvent) {
      if (
        refContainer.current &&
        !refContainer.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handlerClickOutside);

    return () => document.removeEventListener("click", handlerClickOutside);
  }, []);

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        setHilightIndex((index) =>
          index > 0 ? index - 1 : filtered.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setHilightIndex((index) => (index + 1) % filtered.length);
        break;
      case "Enter":
        if (hilightIndex >= 0) {
          const newVal = filtered[hilightIndex];
          setValue(newVal);
          setIsOpen(false);
        }
        break;

      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={refContainer} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        placeholder="search veg..."
        onKeyDown={handlerKeyDown}
        onFocus={() => filtered.length > 0 && setIsOpen(true)}
      />
      {isOpen && filtered.length > 0 && (
        <ul className="absolute top-[100%] left-0 bg-white rounded overflow-hidden border border-gray-300 w-full mt-2">
          {filtered.map((item, index) => (
            <li
              key={item + index}
              onMouseEnter={() => setHilightIndex(index)}
              onClick={() => setValue(item)}
              className={`${
                index === hilightIndex ? "bg-blue-300" : "bg-transparent"
              } p-2`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
