"use client";
import { useState, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function ModalWindow2() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(isOpen && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen])

  return (
    <div className="flex items-center justify-center mx-auto">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-blue-400 text-white cursor-pointer"
      >
        Open modal window
      </button>

      {isOpen && (
        <div className="fixed h-screen w-full z-0 top-0 left-0">
          <div
            className="bg-black opacity-40 z-0 h-screen top-0 absolute left-0 w-full"
          ></div>

          <div ref={containerRef} className="p-10 bg-white rounded-xl z-10 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px]">
            <div className="flex justify-between items-baseline mb-10 text-2xl">
              <h1 className="">title 1</h1>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <IoCloseOutline/>
              </button>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              sed vitae tenetur incidunt atque, accusantium quibusdam, eum hic
              perferendis porro repellat aspernatur, possimus ipsam repellendus
              nisi debitis totam a fuga.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
