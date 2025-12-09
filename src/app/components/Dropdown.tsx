"use client";

import { useState, useEffect, useRef } from "react";

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  placeholder?: string;
}

export default function Dropdown({
  options,
  placeholder = "Select...",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hilightIndex, setHilightIndex] = useState(-1);
  const [selected, setSelected] = useState<Option | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        if (isOpen) {
          setSelected(options[hilightIndex]);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
        break;
      }

      case "ArrowUp": {
        e.preventDefault();
        setHilightIndex((i) => (i > 0 ? i - 1 : options.length - 1));
        break;
      }

      case "ArrowDown": {
        e.preventDefault();
        setHilightIndex((i) => (i + 1) % options.length);
        break;
      }

      case "Escape": {
        setIsOpen(false);
        break;
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
        
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={onKeyDown}
      className="relative w-[200px] border border-gray-300 rounded-lg p-2 cursor-pointer"
    >
      <div>{selected ? selected.label : placeholder}</div>

      {isOpen && (
        <ul className="mt-1 rounded-lg absolute top-[100%] w-[200px] left-0 bg-white border border-gray-300 list-none overflow-hidden max-h-48 overflow-y-auto">
          {options.map((opt, i) => (
            <li
              key={opt.value}
              onMouseEnter={() => setHilightIndex(i)}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className={`${
                hilightIndex === i ? "bg-blue-50" : "bg-transparent"
              } px-3 py-2 overflow-y-auto transition-colors duration-150`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
