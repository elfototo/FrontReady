"use client";

import { useState, useEffect, useRef } from "react";

const faceFetch = async (page: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 20 }).map((_, i) => `${page * 20 +i + 1} item`));
    }, 800);
  });
};

export default function InfinityScrollIntObs2() {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadRef = useRef<HTMLDivElement | null>(null);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const newItems = await faceFetch(page);

    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 1,
      }
    );

    if (loadRef.current) observer.observe(loadRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-xl">
      <ul className="grid grid-cols-2 gap-5">
        {items.map((item, index) => (
          <li className="p-5 bg-gray-300 rounded" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div ref={loadRef}></div>
      {isLoading && <p>...Loading</p>}
      {!hasMore && <p>not more elements</p>}
    </div>
  );
}
