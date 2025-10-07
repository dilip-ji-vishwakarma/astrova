export const getImageUrl = (path) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  if (!baseUrl) {
    console.warn("⚠️ VITE_BASE_URL is not defined");
    return "";
  }
  if (!path) return "";
  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};
