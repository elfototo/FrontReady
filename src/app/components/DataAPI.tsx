"use client";
import { useState, useEffect } from "react";

  type User = {
    id: number,
    name: string
  }

export default function DataAPI() {
    
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");

  useEffect(() => {

    async function fetchUsers() {
      try {
        setIsLoading(true);
        setErrors("");

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Network error");
        }

        const data: User[] = await res.json();

        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
            setErrors(err.message);
        } else {
            setErrors("Unknow erorr")
        }
        
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if(isLoading) return <p>...Loading</p>
  if(errors) return <p className="text-red-400">Errors: {errors}</p>

  return (
    <div>
        <h2>Users</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            name: {user.name}</li>
        ))}
      </ul>
    </div>
  );
}
