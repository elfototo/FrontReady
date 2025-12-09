"use client";

import { useState } from "react";
type Tab = {
  id: number;
  title: string;
  content: string;
};
export default function Tabs2() {
  const [active, setActive] = useState<number>(0);

  const tabs: Tab[] = [
    { id: 1, title: "tab 1", content: "content 1" },
    { id: 2, title: "tab 2", content: "content 2" },
    { id: 3, title: "tab 3", content: "content 3" },
  ];

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight") {
        setActive((v) => (v + 1) % tabs.length);
    } else if (e.key === "ArrowLeft") {
        setActive((v) => (v - 1 + tabs.length) % tabs.length)
    } else if (e.key === "Enter" || e.key === "") {
        e.preventDefault();
        setActive(idx);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[500px] h-auto ">
        <div
          role="tablist"
          area-label="Exemple Tabs"
          className="flex gap-2 mb-5"
        >
          {tabs.map((tab, i) => {
            const isActive = i === active;

            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleOnKeyDown(e, i)}
                className={`px-4 py-1 ${
                  isActive ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        <div>
          {tabs.map((t, i) => {
            if (i !== active) return null;
            return (
              <div
                key={t.id}
                role="tabpanel"
                id={`panel-${t.id}`}
                aria-labelledby={`tab-${t.id}`}
                className="p-5 border border-gray-200 rounded-lg w-full"
              >
                {t.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
