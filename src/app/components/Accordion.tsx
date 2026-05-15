"use client";
import { useState } from "react";

type Accordion = {
  id: number;
  title: string;
  content: string;
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggele = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const items: Accordion[] = [
    {
      id: 1,
      title: "title1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid, voluptatum accusamus esse mollitia commodi quas alias modi debitis optio nobis aperiam exercitationem officiis autem, earum porro. Quos, non fuga?",
    },
    {
      id: 2,
      title: "title2",
      content:
        "Aspernatur aliquid, voluptatum accusamus esse mollitia commodi quas alias modi debitis optio nobis aperiam exercitationem officiis autem, earum porro. Quos, non fuga?",
    },
    {
      id: 3,
      title: "title3",
      content:
        "Quos, non fuga? it amet consectetur adipisicing elit. Aspernatur aliquid, voluptatum accusamus esse mollitia commodi quas alias modi debitis optio nobis aperiam exercitationem officiis autem, earum porro.",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[50%]">
        {items.map((item) => (
          <div className="w-full" key={item.id}>
            <button
              onClick={() => handleToggele(item.id)}
              className="cursor-pointer bg-blue-400 text-white w-full"
            >
              <span>{item.title}</span>
              <span className="ml-5">{openIndex === item.id ? "-" : "+"}</span>
            </button>
            {openIndex === item.id && (
              <div className="p-5 bg-gray-100 ">{item.content}</div>
            )}
          </div>
        ))}
      </div> 
    </div>
  );
}
