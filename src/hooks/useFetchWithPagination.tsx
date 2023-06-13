/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const useFetchWithPagination = (url: string, pageSize = 10) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}?page=${page}&per_page=${pageSize}`
        );
        
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const jsonResponse = await response.json();
        
        setData((prevData: any) => [...prevData, ...jsonResponse]);
        setHasMore(jsonResponse.length === pageSize);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    setLoading(true);
    fetchData();
  }, [url, page, pageSize]);

  const loadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  };

  return { data, loading, hasMore, loadMore, loadingMore, error };
};

export default useFetchWithPagination;
