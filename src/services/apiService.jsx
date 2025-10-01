import axios from "axios";

export async function apiService(
  endpoint,
  method = "get",
  data = null,
  config = {}
) {
  const BASE_URL = import.meta.env.VITE_API_URL || "";
  const URL = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios({
      url: URL,
      method,
      data: method === "get" || method === "delete" ? undefined : data,
      ...config,
    });

    return {
      data: response.data.data || response.data || null,
      pagination: response.data.pagination || null,
      statusCode: response.status,
      message: response.data.message || response.statusText,
      error: null,
      success: response.data.success ?? true,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: null,
        statusCode: error.response?.status || 500,
        message: error.response?.data?.message || error.message,
        error: error.response?.data || error.message,
        success: false,
      };
    }

    return {
      data: null,
      statusCode: 500,
      message: "An unexpected error occurred",
      error: null,
      success: false,
    };
  }
}
