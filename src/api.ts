// src/api.ts
import axios from "axios";

const API_KEY = "QY0TAX2-YBS4Q13-HTQWW64-XF46TXF"; // Замените на ваш реальный API ключ
const BASE_URL = "https://api.kinopoisk.dev/v1.4/movie";

export const fetchSearchQuery = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        limit: 50,
        page: 1,
        notNullFields: ["id","name","poster.url","year","description","ageRating"],
        sortField: "releaseYears.start",
        sortType: -1,
        type: "movie",
        query,
        token: API_KEY,
      },
      paramsSerializer: {
        indexes: null,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMoviesCollection = async (type:string = '') => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        limit: 50,
        page: 2,
        notNullFields: ["id","name","poster.url","year","description","ageRating"],
        sortField: "releaseYears.start",
        sortType: -1,
        type: `${type}`,
        token: API_KEY,
      },
      paramsSerializer: {
        indexes: null,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
