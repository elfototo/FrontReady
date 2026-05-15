"use client";

import { useState, useMemo } from "react";

type Person = {
  id: number;
  name: string;
  age: number;
  address: string;
  phone: string;
};

type SortDirection = "asc" | "desc";
type SortKey = keyof Omit<Person, "id">;

const DATA: Person[] = [
  { id: 1, name: "Svetlana", age: 30, address: "Moscow", phone: "111-09390" },
  { id: 2, name: "Max", age: 29, address: "Paris", phone: "2229-98372" },
  { id: 3, name: "John", age: 34, address: "London", phone: "332-97433" },
  { id: 4, name: "Lisa", age: 25, address: "Danang", phone: "44492678" },
];

export default function SortableTable2() {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);

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
    const isActive = key === sortKey;

    if (sortKey !== key) return <span className={`${isActive ? "text-gray-600" : "text-gray-300"}`}>{" ↑↓"}</span>

    return <span className={`${isActive ? "text-gray-600" : "text-gray-300"}`}>{sortDirection === "asc" ? " ↑" : " ↓"}</span>
  }

  return (
    <table className="w-full border border-gray-300 rounded m-10">
      <thead className="bg-gray-50 border border-gray-300">
        <tr>
          <th onClick={() => handleSort("name")} className="cursor-pointer">
            <span>Name:</span>
            <span>{renderArrow("name")}</span>
          </th>
          <th onClick={() => handleSort("age")} className="cursor-pointer">
            <span>Age:</span>
            <span>{renderArrow("age")}</span>
          </th>
          <th onClick={() => handleSort("address")} className="cursor-pointer">
            <span>Address:</span>
            <span>{renderArrow("address")}</span>
          </th>
          <th onClick={() => handleSort("phone")} className="cursor-pointer">
            <span>Phone:</span>
            <span>{renderArrow("phone")}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((person) => (
          <tr key={person.id}>
            <td className="p-2 border border-gray-300">{person.name}</td>
            <td className="p-2 border border-gray-300">{person.age}</td>
            <td className="p-2 border border-gray-300">{person.address}</td>
            <td className="p-2 border border-gray-300">{person.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
