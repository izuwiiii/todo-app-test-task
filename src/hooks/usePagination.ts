import { useState, useEffect, useMemo } from "react";
import type { Todo } from "../types/ITodo";

export const usePagination = (items: Todo[], perPage: number = 5) => {
  const [page, setPage] = useState(0);

  const pageCount = useMemo(
    () => Math.ceil(items.length / perPage),
    [items.length, perPage]
  );

  const currentItems = useMemo(() => {
    const offset = page * perPage;
    return items.slice(offset, offset + perPage);
  }, [items, page, perPage]);

  useEffect(() => {
    if (page > 0 && currentItems.length === 0) {
      setPage(0);
    }
  }, [currentItems.length, page]);

  return {
    page,
    setPage,
    currentItems,
    pageCount,
  };
};
