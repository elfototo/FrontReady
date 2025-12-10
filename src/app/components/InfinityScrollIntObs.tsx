"use client";

import { useState, useEffect, useRef } from "react";

const fetchItems = async (page: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 20 }).map((_, i) => `item ${i + 1 + (page * 20)}`)
      );
    }, 800);
  });
};

export default function InfinityScrollIntObs() {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const newItems = await fetchItems(page);

    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const target = entries[0];
        if(target.isIntersecting) loadMore();
    }, {
        threshold: 1
    })

    if(loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [])

  return (
    <div className="flex items-center justify-center">
      <ul className="w-[500px] mx-auto grid grid-cols-2 gap-5">
        {items.map((item, index) => (
          <li key={index} className="p-5 bg-gray-100  rounded-xl">
            {item}
          </li>
        ))}

        <div ref={loaderRef}></div>
        {isLoading && <span>Loading...</span>}
        {!hasMore && <span>items ist more</span>}
      </ul>
    </div>
  );
}
