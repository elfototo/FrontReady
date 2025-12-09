"use client";
import { useState } from "react";

export default function Pagination2() {
  const [currentPage, setCurrentPage] = useState(1);

  const date = Array.from(
    { length: 100 },
    (_, i) => i + 1 + `Lorem, ipsum dolor sit amet`
  );

  const itemsInPage = 10;
  const totalPages = Math.ceil(date.length / 10);

  const start = (currentPage - 1) * itemsInPage;
  const itemsInCurrentPage = date.slice(start, start + itemsInPage);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[500px] grid grid-cols-2 gap-5 mb-10">
        {itemsInCurrentPage.map((item) => (
          <div className="p-5 bg-gray-100" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="p-2 bg-blue-400 text-white rounded-l-lg"
        >
          Left
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          <button
            onClick={() => setCurrentPage(i)}
            className={`p-2 hover:bg-gray-200" ${currentPage === i ? "bg-blue-400 text-white" : "bg-transparent"}`}
            key={i}
          >
            {i}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="p-2 bg-blue-400 text-white rounded-r-lg"
        >
          Right
        </button>
      </div>
    </div>
  );
}
