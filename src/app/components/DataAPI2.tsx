"https://jsonplaceholder.typicode.com/users";

"use client";

import { useState, useEffect } from "react";
type User = {
  id: number;
  name: string;
  email: string;
};
export default function DataAPI2() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    async function fetchUsers(url: string) {
      try {
        setIsLoading(true);
        setErrors("");

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("network error");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrors(error.message);
        } else {
          setErrors("unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers("https://jsonplaceholder.typicode.com/users");
  }, []);

  if (isLoading) return <div>...isLoading</div>;
  if (errors) return <div>{errors}</div>;

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="bg-gray-100 p-10 rounded-2xl flex items-center justify-center flex-col">
        {users?.map((u) => (
          <div className="w-[100%] grid grid-cols-2 gap-10" key={u.id}>
            <div>name: {u.name}</div>
            <div>email: {u.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
