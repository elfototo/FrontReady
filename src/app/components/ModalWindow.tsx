"use client";
import { useState } from "react";

export default function ModalWindow() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="">
      <div className="flex items-center justify-center">
        <button
          className="p-2 bg-blue-400 text-white"
          onClick={() => setIsOpen(true)}
        >
          Open Model
        </button>
      </div>

      {/* Modal window */}

      {isOpen && (
        <div className="fixed h-screen w-full z-0 top-0 left-0">
          <div onClick={() => setIsOpen(false)} className="bg-black absolute h-screen w-full z-0 opacity-60"></div>

          <div className="w-[300px] relative z-10 rounded-2xl bg-white p-10 shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between items-baseline">
              <h2>Titile</h2>
              <button className="cursor-pointer hover:bg-gray-100 rounded-full border border-gray-300 w-[30px] h-[30px]" onClick={() => setIsOpen(false)}>x</button>
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              architecto, deserunt eligendi at, dolore ullam omnis magni ipsam
              reprehenderit odit maxime sunt
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
