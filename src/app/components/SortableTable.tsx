"use client";

import { useState, useMemo } from "react";

type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

type SortKey = keyof Omit<Person, "id">;
type SortDirection = "asc" | "desc";

const DATA: Person[] = [
  { id: 1, name: "Anna", age: 25, city: "Berlin" },
  { id: 2, name: "Max", age: 30, city: "Paris" },
  { id: 3, name: "John", age: 22, city: "London" },
  { id: 4, name: "Kate", age: 28, city: "Rome" },
];

export default function SortableTable() {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortedData = useMemo(() => {
    if (!sortKey) return DATA;

    return [...DATA].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (valueA > valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA < valueB) return sortDirection === "asc" ? 1 : -1;

      return 0;
    });
  }, [sortKey, sortDirection]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const renderArrow = (key: SortKey) => {
    const isActive = sortKey === key;
    const colorClass = isActive ? "text-gray-900" : "text-gray-400"

    if (sortKey !== key) return <span className={colorClass}>{" ↑↓"}</span>;

    return <span className={colorClass}>{sortDirection === "asc" ? " ↑" : "  ↓"}</span>
  };

  return (
    <table className="w-full border-collapse mx-10">
      <thead className="border border-gray-300">
        <tr>
          <th
            onClick={() => handleSort("name")}
            className="cursor-pointer border border-gray-300 text-start px-3 py-2"
          >
            <span>Name:</span>
            <span className="w-4 ml-2 inline-block">{renderArrow("name")}</span>
          </th>
          <th
            onClick={() => handleSort("age")}
            className="cursor-pointer border border-gray-300 text-start px-3 py-2"
          >
            Age:
            <span className="w-4 ml-2 inline-block ">{renderArrow("age")}</span>
          </th>
          <th
            onClick={() => handleSort("city")}
            className="cursor-pointer px-3 py-2 border border-gray-300 text-start"
          >
            City:
            <span className={`w-4 ml-2 inline-block`}>{renderArrow("city")}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((person) => (
          <tr key={person.id} className="border border-gray-300">
            <td className="bg-gray-100 border border-gray-300 px-3 py-2">
              {person.name}
            </td>
            <td className="border border-gray-300 px-3 py-2">{person.age}</td>
            <td className="bg-gray-100 border border-gray-300 px-3 py-2">
              {person.city}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
