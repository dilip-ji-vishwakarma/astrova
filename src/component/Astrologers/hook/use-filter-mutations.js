import { useEffect, useState } from "react";
import { astrologer_list } from "../../../utils/api-endpoints";
import { apiService } from "../../../services/apiService";
import { toast } from "sonner";

const SORT_OPTIONS = {
  "Popularity": "popularity",
  "Experience : High to Low": "experienceHighToLow",
  "Experience : Low to High": "experienceLowToHigh",
  "Total orders : High to Low": "totalOrdersHighToLow",
  "Total orders : Low to High": "totalOrdersLowToHigh",
  "Price : High to Low": "priceHighToLow",
  "Price : Low to High": "priceLowToHigh",
  "Rating : High to Low": "ratingHighToLow",
};

export const useFilterMutations = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const [filters, setFilters] = useState({
    languagesSpoken: "",
    experienceYrs: "",
    primarySkills: "",
    country: "",
    gender: "",
  });

  const [filterOptions, setFilterOptions] = useState({
    languagesList: [],
    skills: [],
    gendersList: [],
    categories: [],
  });

  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    limit: 10,
    totalPages: 1,
  });

  const fetchAstrologers = async (page = 1) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append("sortBy", SORT_OPTIONS[selectedSort]);
      params.append("page", page);

      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      const response = await apiService(`${astrologer_list}?${params.toString()}`, "get");

      if (response?.success) {
        setData(response.data);
        setPagination(response.pagination || { page: 1, total: 0, limit: 10, totalPages: 1 });
      } else {
        toast.error(response?.message || "Failed to load astrologers");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const fetchFilterOptions = async () => {
    try {
      const response = await apiService("/astrologer/filter-list", "get");
      if (response?.success) setFilterOptions(response.data);
      else toast.error("Failed to load filters");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong fetching filters");
    }
  };

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  useEffect(() => {
    fetchAstrologers(1); // reset to first page when filters or sort change
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handlePageChange = (page) => {
    fetchAstrologers(page);
  };

  return {
    SORT_OPTIONS,
    selectedSort,
    setSelectedSort,
    handleFilterChange,
    filterOptions,
    data,
    loading,
    filters,
    pagination,
    handlePageChange,
  };
};

