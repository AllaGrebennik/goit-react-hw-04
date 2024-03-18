import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "bjQDTdyvP0SiD8UcRKt0mAufzoV_rxe6bSnKAU1McKE";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      client_id: ACCESS_KEY,
      per_page: 12,
      page,
    },
  });
  return {
    data: response.data.results,
    total_pages: response.data.total_pages,
  }
};