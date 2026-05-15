"use client";

import { useState } from "react";

type Tab = {
  id: number;
  title: string;
  content: string;
};

const TABS: Tab[] = [
  {
    id: 1,
    title: "title1",
    content: "content1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
  },
];

export default function Tabs2() {
  const [active, setActive] = useState<number>(0);

  const handlerKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        setActive((prev) => (active > 0 ? prev - 1 : TABS.length - 1));
        break;

      case "ArrowRight":
        e.preventDefault();
        setActive((prev) => (prev + 1) % TABS.length);
        break;

      case "Enter":
        e.preventDefault();
        setActive(idx);
        break;
    }
  };

  return (
    <div className="w-lg">
      <div role="tablist">
        {TABS.map((tab, i) => {
          const isActive = i === active;

          return (
            <button
              className={`px-3 py-2 ${
                isActive ? "bg-blue-300" : "bg-gray-400"
              }`}
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => handlerKeyDown(e, i)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className="p-5 bg-gray-100">
        {TABS.map((tab, i) => {
          if (i !== active) return null;

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tap-${tab.id}`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
