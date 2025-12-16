"use client";

import { useState, useEffect, useRef } from "react";

type Option = {
  id: number;
  label: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  placeholder: string;
}

export default function SearchWithDelay({
  options,
  placeholder = "search item...",
}: SelectProps) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [lightIndex, setLightIndex] = useState(-1);
  const [filtered, setFiltered] = useState<Option[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        if (lightIndex >= 0) {
          const selected = filtered[lightIndex];
          setInputValue(selected.label);
          setIsOpen(false);
        }

      case "ArrowUp":
        e.preventDefault();
        setLightIndex((i) => (i > 0 ? i - 1 : filtered.length - 1));
        break;

      case "ArrowDown":
        e.preventDefault();
        setLightIndex((i) => (i + 1) % filtered.length);
        break;
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

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (inputValue.trim() === "") {
        setFiltered([]);
        setIsOpen(false);
        return;
      }

      const filteredData = options.filter((opt) =>
        opt.label.toLowerCase().includes(inputValue.toLowerCase())
      );

      setFiltered(filteredData);
      setIsOpen(filteredData.length > 0);
      setLightIndex(-1);
    }, 500);

    return () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  }, [inputValue, options]);

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleOnKeyDown}
        onFocus={() => filtered?.length > 0 && setIsOpen(true)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />

      {isOpen && filtered.length > 0 && (
        <ul className="absolute top-[100%] left-0 w-full grid mt-1 border border-gray-300 rounded-lg overflow-hidden">
          {filtered?.map((opt, index) => (
            <li
              key={opt.id}
              onMouseEnter={() => setLightIndex(index)}
              onClick={() => {
                setInputValue(opt.label);
                setIsOpen(false);
              }}
              className={`${
                index === lightIndex ? "bg-blue-200" : "bg-transparent"
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
