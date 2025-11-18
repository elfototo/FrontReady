import { useState, useEffect } from "react";

export function useSearch<T extends Record<string, string | number>>(
  data: T[],
  query: string,
  fields: (keyof T)[]
) {
  const [filtered, setFiltered] = useState<T[]>([]);

  useEffect(() => {
    const q = query.toLowerCase();

    const result = data.filter((item) =>
      fields.some((field) =>
        String(item[field]).toLowerCase().includes(q)
      )
    );

    setFiltered(result);
  }, [query, data, fields]);

  return filtered;
}