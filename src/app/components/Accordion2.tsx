"use client";

import { useState } from "react";

type Accordion = {
  id: number;
  title: string;
  content: string;
};

export default function Accordion2() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const itemsAccordiins: Accordion[] = [
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

  return (
    <div className="w-[500px]">
      <ul>
        {itemsAccordiins.map((item) => (
          <div key={item.id}>
            <li
              className="bg-blue-400 text-white cursor-pointer px-3 py-2 text-center"
              onClick={() =>
                activeIndexes.includes(item.id)
                  ? setActiveIndexes(activeIndexes.filter((i) => i !== item.id))
                  : setActiveIndexes((prev) => [...prev, item.id])
              }
            >
              <div> 
                <span>{item.title}</span>
                <span className="ml-2">
                  {activeIndexes.includes(item.id) ? "-" : "+"}
                </span>
              </div>
            </li>
            {activeIndexes.includes(item.id) && (
              <div className="p-5 bg-gray-100">{item.content}</div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
