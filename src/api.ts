// src/api.ts
import axios from 'axios';

const API_KEY = 'QY0TAX2-YBS4Q13-HTQWW64-XF46TXF'; // Замените на ваш реальный API ключ
const BASE_URL = 'https://api.kinopoisk.dev/v1.4/';

export const fetchSearchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}movie/search`, {
      params: {
        limit:50,
        page:1,
       query,
        token: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};


export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}movie`, {
      params: {
        limit: 50,
        page:2,
        token: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
