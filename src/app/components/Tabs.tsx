"use client";
import { useState } from "react";

type Tab = {
  id: string;
  title: string;
  content: string;
};
export default function Tabs() {
  const [active, setActive] = useState<number>(0);
  const tabs: Tab[] = [
    { id: "t1", title: "title1", content: "content1" },
    { id: "t2", title: "title2", content: "content2" },
    { id: "t3", title: "title3", content: "content3" },
  ];

  const handleOnKey = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight") {
      setActive((v) => (v + 1) % tabs.length);
    } else if (e.key === "ArrowLeft") {
      setActive((v) => (v - 1 + tabs.length) % tabs.length);
    } else if (e.key === "Enter" || e.key === "") {
      e.preventDefault();
      setActive(idx);
    }
  };


  return (
    <div className="max-w-lg mx-auto p-4">
      <div role="tablist" aria-label="Example Tabs" className="flex gap-2 mb-4">
        {tabs.map((t, i) => {
          const isActive = i === active;

          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => handleOnKey(e, i)}
              className={`px-4 py-1 focus:outline-none ${
                isActive ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {t.title}
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
              area-labelledby={`tab-${t.id}`}
              className="p-4 border border-gray-200 rounded-lg"
            >
              {t.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
