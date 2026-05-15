"use client";

import { BiSolidError } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Dispatch, JSX, SetStateAction } from "react";
import { useState, useEffect } from "react";

type stylesToastButton = {
  id: number;
  type: string;
  styles: string;
  text: string;
  icon: JSX.Element;
};

const stylesToastButton: stylesToastButton[] = [
  {
    id: 1,
    type: "success",
    styles: "bg-gradient-to-r from-[#00de00] to-[#ffce3b]",
    text: "Show success",
    icon: <AiFillCheckCircle />,
  },
  {
    id: 2,
    type: "info",
    styles: "bg-gradient-to-r from-[#0044ef] to-[#00b9fe]",
    text: "Show info",
    icon: <FaInfoCircle />,
  },
  {
    id: 3,
    type: "error",
    styles: "bg-gradient-to-r from-[#ff2522] to-[#ff932e]",
    text: "Show error",
    icon: <BiSolidError />,
  },
];

export default function ToastNotifications() {
  const [activeToast, setActiveToast] = useState<number[]>([]);

  return (
    <main className="flex gap-10">
      {stylesToastButton.map((item) => (
        <div key={item.id} className="relative">
          <button
            onClick={() => {
              setActiveToast((prev) => [...prev, item.id]);
              setTimeout(() => {
                setActiveToast((prev) => prev.filter((i) => i !== item.id));
              }, 3000);
            }}
            className="absolute whitespace-nowrap px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white bottom-2 right-2 cursor-pointer font-bold flex gap-2 items-center"
          >
            {item.icon}
            {item.text}
          </button>
          <div
            className={`${item.styles} px-4 py-2 rounded-full  text-transparent flex gap-2 items-center`}
          >
            {item.icon}
            {item.text}
          </div>
        </div>
      ))}
      {activeToast.length > 0 && (
        <div className="fixed top-10 right-10 z-30">
          <Toasts activeToast={activeToast} setActiveToast={setActiveToast} />
        </div>
      )}
    </main>
  );
}

const toasts = [
  {
    id: 1,
    type: "success",
    title: "Summarise what happened",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    action: "View changes",
    icon: <AiFillCheckCircle size={20} className="text-green-400" />,
    color: "bg-gradient-to-br from-[#e6faf2] to-white",
  },
  {
    id: 2,
    type: "info",
    title: "Summarise what happened",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    action: "View changes",
    icon: <FaInfoCircle size={20} className="text-blue-400" />,
    color: "bg-gradient-to-br from-[#f2e5ff] to-white",
  },
  {
    id: 3,
    type: "error",
    title: "Summarise what happened",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    action: "View changes",
    icon: <BiSolidError size={20} className="text-red-400" />,
    color: "bg-gradient-to-br from-[#fff4ec] to-white",
  },
];

type ToastProps = {
  activeToast: number[];
  setActiveToast: Dispatch<SetStateAction<number[]>>;
};

const Toasts = ({ activeToast, setActiveToast }: ToastProps) => {
  useEffect(() => {}, []);
  return (
    <main className="flex gap-5 flex-col">
      {toasts.map((item) => (
        <div key={item.id}>
          {activeToast.includes(item.id) && (
            <div
              className={` flex items-start gap-5 border border-white p-5 shadow-xl rounded-2xl ${item.color} w-[400px]`}
            >
              <div className="bg-white p-2 rounded-full ">{item.icon}</div>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-sm text-gray-500">{item.content}</p>
                <button className="font-bold flex gap-2 items-center cursor-pointer">
                  {item.action}
                  <HiOutlineArrowNarrowRight size={24} className="pt-[2px]" />
                </button>
              </div>
              <button
                onClick={() =>
                  activeToast.includes(item.id) &&
                  setActiveToast(activeToast.filter((i) => i !== item.id))
                }
                className="text-gray-500 cursor-pointer"
              >
                <AiOutlineClose size={20} className="self-start"/>
              </button>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};
