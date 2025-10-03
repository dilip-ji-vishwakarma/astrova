// apiServiceWithSession.jsx
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "";

// Get the token from localStorage (like Next.js session)
const getSessionToken = () => localStorage.getItem("sessionToken");

/**
 * Generic API service with session token support
 * Supports all HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
 */
export async function apiServiceWithSession(
  endpoint,
  method = "get",
  data = null,
  config = {}
) {
  const URL = `${BASE_URL}${endpoint}`;
  const token = getSessionToken();

  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...config.headers,
  };

  try {
    const response = await axios({
      url: URL,
      method,
      data: method === "get" || method === "delete" ? undefined : data,
      headers,
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
      if (error.response?.status === 401 || error.response?.status === 403) {
        console.log("Token expired or unauthorized access detected");
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("userInfo");
        window.location.href = "/login";
      }

      // Server unreachable
      if (!error.response) {
        return {
          data: null,
          statusCode: 503,
          success: false,
          message:
            error.message || "Server is unreachable. Please check the API server.",
          error: {
            message: "Could not connect to the server. Ensure it's running.",
          },
        };
      }

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
