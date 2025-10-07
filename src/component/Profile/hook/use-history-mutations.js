import { useCallback, useState } from "react";
import { payments_history } from "../../../utils/api-endpoints";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";

export const useHistoryMutations = ({ history }) => {
  const defaultPagination = {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  };

  const [pagination, setPagination] = useState(history?.pagination || defaultPagination);
  const [datas, setDatas] = useState(history?.data || []);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (pageNumber) => {
      const defaultPagination = {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
      };

      try {
        setLoading(true);

        // Use current pagination limit or default
        const limit = pagination?.limit || defaultPagination.limit;

        const response = await apiServiceWithSession(
          `${payments_history}?page=${pageNumber}&limit=${limit}`,
          "get"
        );

        if (response?.statusCode === 200 && response?.data) {
          setDatas(response.data);
          setPagination(response.pagination || defaultPagination);
        }
      } catch (error) {
        console.error("❌ Failed to fetch payments:", error);
      } finally {
        setLoading(false);
      }
    },
    [pagination?.limit] // only depends on limit
  );

  const handlePageChange = (page) => fetchData(page);

  return { datas, loading, handlePageChange, pagination, fetchData };
};
