"use client";

import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Node.js",
  "GraphQL",
  "Figma",
  "Redux",
];

export default function MultiSelectTagsInput() {
  const [value, setValue] = useState("");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);

  const refContainer = useRef<HTMLDivElement | null>(null);
  const refTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }
    refTimeout.current = window.setTimeout(() => {
      if (value.length === 0) {
        setIsOpen(false);
        setFiltered([]);
        return;
      }

      const searched = skills.filter(
        (item) =>
          !selectedTag.includes(item) &&
          item.toLowerCase().includes(value.toLowerCase()),
      );

      setFiltered(searched);
      setIsOpen(true);
    }, 500);

    return () => {
      if (refTimeout.current) {
        clearTimeout(refTimeout.current);
      }
    };
  }, [value, selectedTag, skills]);

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

  return (
    <main className="w-[80%] relative" ref={refContainer}>
      <div className="flex flex-wrap items-center gap-2 bg-white rounded-2xl shadow-2xl p-4">
        {selectedTag.map((item) => (
          <div key={item}>
            <SelectedTag
              title={item}
              setSelectedTag={setSelectedTag}
              selectedTag={selectedTag}
            />
          </div>
        ))}
        <input
          type="text"
          placeholder="...skills"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-w-[120px] bg-transparent outline-none"
        />
      </div>

      {isOpen && (
        <ul className="absolute top-[100%] gap-3 flex z-10 mt-2">
          {filtered.map((item) => (
            <li
              key={item}
              onClick={() => {
                setSelectedTag((prev) => [...prev, item]);

                setValue("");
              }}
            >
              <Tag title={item} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <div className="px-3 py-1 border border-gray-500 text-gray-500 rounded-full bg-gray-100 flex items-center gap-3 cursor-pointer">
      {title}
    </div>
  );
};

type PropsSelectedTag = {
  title: string;
  setSelectedTag: Dispatch<SetStateAction<string[]>>;
  selectedTag: string[];
};

const SelectedTag = ({
  title,
  setSelectedTag,
  selectedTag,
}: PropsSelectedTag) => {
  return (
    <div className="px-3 py-1 border border-gray-500 text-gray-500 rounded-full bg-gray-100 flex items-center gap-3 cursor-pointer">
      {title}
      <button
        onClick={() => {
          setSelectedTag(selectedTag.filter((item) => item !== title));
        }}
      >
        <IoIosCloseCircle className="cursor-pointer" />
      </button>
    </div>
  );
};
