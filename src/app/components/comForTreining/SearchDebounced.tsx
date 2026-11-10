"use client";

import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface SearchResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export default function SearchDebounced() {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setProducts([]);
      setIsLoading(false);
      setError("");
      return;
    }

    const controller = new AbortController();

    const fetchProducts = async () => {
      setIsLoading(true);
      setError("");

      try {
        const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedValue)}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("failed to fetch products");
        }

        const data: SearchResponse = await response.json();

        setProducts(data.products);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError("something went wrong. Please try again");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, [debouncedValue]);

  return (
    <div className="relative">
      <input
        className=" px-3 py-2 bg-white rounded-lg text-gray-500"
        type="text"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {products.length !== 0 && (
        <ul className="p-2 absolute w-full top-full mt-2 rounded-lg bg-white text-gray-500">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
