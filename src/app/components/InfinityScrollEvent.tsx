"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const fetchItems = async (page: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 20 }).map((_, i) => `items ${page * 20 + i + 1}`)
      );
    }, 800);
  });
};

export default function InfinityScrollEvent() {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const loadmore = useCallback(async () => {
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
  }, [isLoading, hasMore, page]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || isLoading || !hasMore) return;

    const { scrollHeight, scrollTop, clientHeight } = container;

    if (scrollHeight - scrollTop <= clientHeight + 50) {
      loadmore();
    }
  }, [isLoading, hasMore, loadmore]);

  useEffect(() => {
    loadmore();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="overflow-y-auto h-[600px]"
    >
      <ul className="w-[500px] mx-auto grid grid-cols-2 gap-5 mt-10">
        {items.map((item, i) => (
          <li key={i} className="p-5 bg-gray-100 rounded-xl">
            {item}
          </li>
        ))}
      </ul>

      {isLoading && <span>Loading...</span>}
      {!hasMore && items.length > 0 && <span>No more items </span>}
    </div>
  );
}
