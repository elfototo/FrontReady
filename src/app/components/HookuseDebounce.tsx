"use client";
import { useState, useEffect, useRef } from "react";

const words = ["react", "next.js", "node.js", "redux", "python"];

export default function HookuseDebounce() {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [hilightIndex, setHilightIndex] = useState(-1);

  const refContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        refContainer.current &&
        !refContainer.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setHilightIndex(-1);
        setFiltered([]);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleFiltered = (labrary: string[], letterts: string) => {
    const newFiltered = labrary.filter((item) =>
      item.toLowerCase().includes(letterts.toLowerCase()),
    );

    if (newFiltered && letterts !== "") {
      setFiltered(newFiltered);
      setIsOpen(true);
    }
  };

  useDebounce(300, handleFiltered, value, words);

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        setHilightIndex((i) =>
          i > 0 ? i - 1 : filtered.length - 1,
        );
        break;

      case "ArrowDown":
        e.preventDefault();
        setHilightIndex((i) => (i < filtered.length - 1 ? i + 1 : 0));
        break;

      case "Escape":
        setIsOpen(false);
        setHilightIndex(-1);
        break;

      case "Enter":
        e.preventDefault();
        setValue(filtered[hilightIndex]);
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={refContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handlerKeyDown}
        className="bg-white px-3 py-2 rounded-2xl"
        onFocus={() => filtered.length > 0 && setIsOpen(true)}
      />

      {isOpen && filtered.length > 0 && (
        <ul className="bg-white">
          {filtered.map((item, index) => (
            <li
              key={item}
              className={`${index === hilightIndex ? "bg-amber-200" : "bg-transparent"}`}
              onMouseEnter={() => setHilightIndex(index)}
              onClick={() => {
                setValue(item);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function useDebounce(
  timer: number,
  handle: (labrary: string[], letters: string) => void,
  letters: string,
  labrary: string[],
) {
  const refTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }

    refTimeout.current = window.setTimeout(() => {
      handle(labrary, letters);
    }, timer);

    return () => {
      if (refTimeout.current) {
        clearTimeout(refTimeout.current);
      }
    };
  }, [labrary, letters, handle]);
}
