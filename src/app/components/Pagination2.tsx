"use client";

import { useState, useEffect } from "react";

export default function Pagination2() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const itemsInPage = 10;

  const totalPages = Math.ceil(data.length / itemsInPage);
  const start = (currentPage - 1) * itemsInPage;
  const itemsOfCurrentPage = data.slice(start, start + itemsInPage);

  return (
    <div className="max-w-xl">
      <ul className="grid grid-cols-2 gap-3 mb-5">
        {itemsOfCurrentPage.map((item, index) => (
          <li className="p-5 bg-gray-300 rounded" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          disabled={currentPage === 1 }
          className="p-2 bg-blue-400 cursor-pointer"
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Back
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          (
          <button className={`${currentPage === i ? "bg-blue-300 text-white" : "bg-gray-300"} cursor-pointer p-2`} key={i}>
            {i}
          </button>
        )
        ))}
         <button
          disabled={currentPage === totalPages }
          className="p-2 bg-blue-400 cursor-pointer"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next</button>
      </div>
    </div>
  );
}
