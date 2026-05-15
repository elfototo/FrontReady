"use client";
import { useState, useRef, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaKeyboard } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";



type Team = {
  id: number;
  name: string;
  role: string;
};
const team = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Eliza Davy",
    role: "Designer",
  },
  {
    id: 3,
    name: "Mark Old",
    role: "Project manager",
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "Frontend Developer",
  },
  {
    id: 5,
    name: "Sarah Chen",
    role: "Frontend Developer",
  },
  {
    id: 6,
    name: "Sarah Chen",
    role: "Frontend Developer",
  },
];

export default function SearchableUserList() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState<Team[]>([]);
  const [hilightIndex, setHilightIndex] = useState(-1);
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
        setHilightIndex(-1);
        return;
      }
      const filtered = team.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      );

      setFiltered(filtered);
      setIsOpen(true);
      setHilightIndex(-1);
    }, 800);

    return () => {
      if (refTimeout.current) clearTimeout(refTimeout.current);
    };
  }, [value, team]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        refContainer.current &&
        !refContainer.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        setHilightIndex((index) =>
          index > 0 ? index - 1 : filtered.length - 1,
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setHilightIndex((index) => (index + 1) % filtered.length);
        break;
      case "Enter":
        if (hilightIndex >= 0) {
          const newVal = filtered[hilightIndex];
          setValue(newVal.name);
          setIsOpen(false);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <main className="relative w-[80%]" ref={refContainer}>
      <div>
        <HiOutlineSearch className="absolute top-1/2 -translate-y-1/2 left-6 z-20 text-gray-500 cursor-poiner"/>
        <FaKeyboard className="absolute top-1/2 -translate-1/2 right-12 z-20 text-gray-500 cursor-pointer"/>
        <FaMicrophone className="absolute top-1/2 -translate-y-1/2 right-6 z-20 text-blue-400 cursor-pointer"/> 
        <input
          type="text"
          placeholder="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => filtered.length > 0 && setIsOpen(true)}
          onKeyDown={handlerKeyDown}
          className="border-gray-200 border rounded-full py-3 px-16 bg-white relative z-10 shadow-xl w-full"
        />
      </div>

      {isOpen && value && (
        <div className="absolute top-[50%] rounded-b-2xl w-full z-0 shadow-2xl overflow-hidden">
          <div className="bg-white w-full h-10"></div>
          <ul className="w-full  overflow-hidden text-gray-500">
            {filtered.map((item, index) => (
              <li
                key={item.id}
                className={`${index === hilightIndex ? "bg-blue-200" : "bg-white"} px-6 py-3 flex gap-6 items-baseline`}
                onMouseEnter={() => setHilightIndex(index)}
                onClick={() => setValue(item.name)}
              >
                <HiOutlineSearch />

                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
