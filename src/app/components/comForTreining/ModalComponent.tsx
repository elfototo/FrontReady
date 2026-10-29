"use client";
import { useState, useEffect } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

type ModalComponentProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
};

export function ModalComponent({
  children,
  isOpen,
  onClose,
}: ModalComponentProps) {

  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeDown);

    return () => document.removeEventListener("keydown", handleEscapeDown);
  }, [isOpen, onClose]);

  return (
    <div className="z-99">
      <div
        data-testid="modal-overlay"
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-[2px]"
      ></div>

      <div
        role="dialog"
        aria-modal="true"
        className="bg-white p-5 flex flex-col fixed w-md h-auto shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl text-gray-600"
      >
        {children}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <RiCloseLargeFill className="text-gray-500" size={20} />
        </button>
      </div>
    </div>
  );
}

export default function Modal1() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-white rounded-lg px-3 py-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>

      {isOpen && (
        <ModalComponent isOpen={isOpen} onClose={handleClose}>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-2xl">title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              nostrum illum ad fuga corrupti dolorem similique omnis velit quis,
              qui praesentium, culpa non, incidunt laboriosam! Deserunt eum
              minus vel maxime?
            </p>
            <button
              aria-label="Close-modal"
              onClick={handleClose}
              className="bg-blue-950 px-3 py-2 rounded-lg text-white cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </ModalComponent>
      )}
    </div>
  );
}
