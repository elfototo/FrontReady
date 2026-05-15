"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const fakeFetch = async (page: number): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 20 }).map((_, i) => `${page * 20 + 1 + i} item`)
      );
    }, 800);
  });
};

export default function InfinityScrollEvent2() {
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);

  const refcontainer = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(
     async () => {
      if (isLoading || !hasMore) return;

      setIsLoading(true);
      const newItems = await fakeFetch(page);

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }

      setIsLoading(false);
    },
    [isLoading, hasMore, page]
  );

  const handleScroll = useCallback(() => {
    const container = refcontainer.current;

    if(!container || isLoading || !hasMore) return;

    const {scrollHeight, scrollTop, clientHeight} = container;

    if(scrollHeight - scrollTop <= clientHeight + 50) {
        loadMore();
    }
  },[isLoading, hasMore, loadMore])

  useEffect(()=> {
    loadMore();
  },[])

  useEffect(() => {
    const container = refcontainer.current;

    if(!container) return;

    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div ref={refcontainer} className="overflow-y-auto h-[600px]">
      <ul className="grid grid-cols-2 gap-5 w-[500px]">
        {items.map((item, index) => (
          <li className="rounded p-5 bg-gray-300" key={item + index}>
            {item}
          </li>
        ))}
      </ul>
      {isLoading && <p>...Loading</p>}
      {!hasMore && <p>not more elements</p>}
    </div>
  );
}
