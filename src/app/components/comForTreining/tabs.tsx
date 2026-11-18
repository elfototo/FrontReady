"use client";
import { useMemo, useState } from "react";

const tabsContent = [
  {
    id: 1,
    title: "Overview",
    content:
      "View your key metrics and recent project activity. Track progress across all your active projects.",
  },
  {
    id: 2,
    title: "Reports",
    content:
      "Generate and download your detailed reports. Export data in multiple formats for analysis.",
  },
  {
    id: 3,
    title: "Settings",
    content:
      "Manage your account preferences and options. Customize your experience to fit your needs.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabsStyles = {
    active: "bg-white rounded-md shadow-md text-black",
    noneActive: "bg-transparent",
  };

  const activeContent = useMemo(
    () => tabsContent.find((item) => item.id === activeTab),
    [activeTab],
  );

  return (
    <div className="">
      <ul
        role="tablist"
        className="p-1 rounded-lg bg-gray-100 text-gray-500 flex w-fit"
      >
        {tabsContent.map((item) => (
          <li key={item.id}>
            <button
              aria-controls={`tab-panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={activeTab === item.id ? 0 : -1}
              type="button"
              role="tab"
              aria-selected={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
              className={`${activeTab === item.id ? tabsStyles.active : tabsStyles.noneActive} px-3 cursor-pointer`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      {/* content */}
      <div
        role="tabpanel"
        id={`tab-panel-${activeTab}`}
        className="border border-gray-300 rounded-2xl p-5 text-gray-500 mt-3 w-sm"
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeContent?.content}
      </div>
    </div>
  );
}
