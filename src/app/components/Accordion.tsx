"use client";
import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggele = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const items = [
    {
      title: "what is react?",
      content: "react is a framework",
    },
    {
      title: "what is next?",
      content: "next is a reacts framework",
    },
    {
      title: "what is HTML?",
      content: "HTML is a giperLinks",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[50%]">
        {items.map((item, i) => (
          <div className="w-full" key={i}>
            <button
              onClick={() => handleToggele(i)}
              className="cursor-pointer bg-blue-400 text-white w-full"
            >
              <span>{item.title}</span>
              <span className="ml-5">{openIndex === i ? "-" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="p-5 bg-gray-100 ">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
