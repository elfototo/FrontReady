"use client";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = Array.from({ length: 100 }, (_, i) => ` items ${i + 1}`);

  const itemsInPage = 10;
  const totalPages = Math.ceil(data.length / itemsInPage);

  const start = (currentPage - 1) * itemsInPage;
  const itemsOfCurrentPage = data.slice(start, start + itemsInPage);

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-5 mb-5">
        {itemsOfCurrentPage.map((i) => (
          <div key={i} className="border border-gray-100 shadow-md rounded-md p-10">{i}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-blue-400 text-white cursor-pointer rounded-l-lg"
        >
          Назад
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          <button onClick={() => setCurrentPage(i)} key={i} className={`${currentPage === i ? " text-blue-500 bg-blue-50" : "hover:bg-gray-100"} mx-2 w-6 h-6 rounded-full cursor-pointer `}>{i}</button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-blue-400 text-white cursor-pointer rounded-r-lg"
        >
          Вперед
        </button>
      </div>
    </div>
  );
}
