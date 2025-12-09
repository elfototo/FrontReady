"use client";
import { useState } from "react";

type Accordion = {
  id: number;
  title: string;
  content: string;
};

export default function Accordion2() {
  const [isActive, setIsActive] = useState<number | null>(0);

  const accordionItems: Accordion[] = [
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
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-[500px]">
        {accordionItems.map((item) => (
          <div key={item.id} className="w-full">
            <button
              onClick={() =>
                setIsActive((prev) => (prev === item.id ? null : item.id))
              }
              className="w-full bg-blue-400 text-white cursor-pointer"
            >
              {item.title}
              {isActive === item.id ? "-" : "+"}
            </button>

            {isActive === item.id && (
              <div className="p-5 bg-gray-100">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
