"use client";

import { useState, useEffect, useRef } from "react";

type Option = {
  id: number;
  label: string;
  value: string;
};

type PropsOptions = {
  options: Option[];
  placeholder: string;
};

export default function Dropdown2({
  options,
  placeholder = "chose...",
}: PropsOptions) {
  const [value, setValue] = useState("");
  const [hilightIndex, setHilightIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setHilightIndex(-1);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        if (hilightIndex >= 0) {
          const newValue = options[hilightIndex];
          setValue(newValue.label);
          setIsOpen(false);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        setHilightIndex((index) =>
          index > 0 ? index - 1 : options.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setHilightIndex((index) => (index + 1) % options.length);
        break;
      case "Escape":
        setIsOpen(false);
        setHilightIndex(-1);
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onKeyDown={handlerKeyDown}
      tabIndex={0}
    >
      <div
        className="px-3 py-2 border border-gray-300 rounded w-lg cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value || placeholder}
      </div>
      {isOpen && (
        <ul className="absolute top-[100%] left-0 w-full overflow-hidden bg-white rounded mt-2 border border-gray-300">
          {options.map((opt, index) => (
            <li
              key={opt.id}
              onMouseEnter={() => setHilightIndex(index)}
              onClick={() => {
                setValue(opt.label);
                setIsOpen(false);
              }}
              className={`${
                index === hilightIndex ? "bg-blue-300" : "bg-transparent"
              } px-3 py-2`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
