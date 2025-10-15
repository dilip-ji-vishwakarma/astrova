import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/apiService";
import { dashboard } from "../../utils/api-endpoints";
import { toast } from "sonner";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService(dashboard, "get");
      if (response?.success) {
        return response.data;
      } else {
        toast.error(response?.message || "Failed to load dashboard data");
        return rejectWithValue(response?.message);
      }
    } catch (error) {
      console.error("Dashboard fetch error:", error);
      toast.error("Something went wrong while fetching data");
      return rejectWithValue(error.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch dashboard data";
      });
  },
});

export default dashboardSlice.reducer;
