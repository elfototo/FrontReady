"use client";

import { useState, useRef, useEffect } from "react";

type Option = {
  id: number;
  label: string;
  value: string;
};

type propsOptions = {
  options: Option[];
  placeholder: string;
};

export default function Autocomplete2({
  options,
  placeholder = "type...",
}: propsOptions) {
  const [inputValue, setInputValue] = useState("");
  const [hilightindex, setHilightindex] = useState(-1);
  const [isOpen, setIsOPen] = useState(false);
  const [filtered, setFiltered] = useState<Option[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeOutRef = useRef<number | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOPen(false);
        setHilightindex(-1);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = window.setTimeout(() => {
      if (inputValue.trim() === "") {
        setFiltered([]);
        setIsOPen(false);
        setHilightindex(-1);
        return;
      }

      const newFiltered = options.filter((opt) =>
        opt.label.toLowerCase().includes(inputValue.toLowerCase())
      );

      setFiltered(newFiltered);
      setIsOPen(true);
      setHilightindex(-1);
    }, 500);
  }, [inputValue]);

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        if (isOpen && hilightindex >= 0) {
          const newValue = filtered[hilightindex];
          setInputValue(newValue.label);
          setIsOPen(false);
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        setHilightindex((index) =>
          index > 0 ? index - 1 : filtered.length - 1
        );
        break;

      case "ArrowDown":
        e.preventDefault();
        setHilightindex((index) => (index + 1) % filtered.length);
        break;
    }
  };

  return (
    <div ref={containerRef}>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onKeyDown={handlerKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => filtered.length > 0 && setIsOPen(true)}
        className="border border-gray-300 rounded px-3 py-2"
      />

      {isOpen && filtered.length > 0 && (
        <ul className="border border-gray-300 overflow-hidden rounded">
          {filtered.map((item, index) => (
            <li
              key={item.id}
              onMouseEnter={() => setHilightindex(index)}
              onClick={() => {
                setInputValue(item.label);
                setIsOPen(false);
              }}
              className={`${
                index === hilightindex ? "bg-blue-300" : "bg-transparent"
              } px-3 py-2`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
