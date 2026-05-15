"https://jsonplaceholder.typicode.com/users";
"use client";

import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function DataAPI2() {
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    const fetcher = async (url: string) => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("network error");
        }

        const data = await res.json();
        setUsersData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("unknown error");
        }
      }
    };

    fetcher("https://jsonplaceholder.typicode.com/users");
  }, []);

  return <div className="w-[500]">{usersData.length > 0 && (
    <ul>
      {usersData.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </li>
      ))}
    </ul>
  )}</div>;
}
