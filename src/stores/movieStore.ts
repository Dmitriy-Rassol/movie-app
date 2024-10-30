
// src/stores/movieStore.ts
import { defineStore } from 'pinia';
import { fetchMovies } from '../api';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Array<{ id: number; name: string; year: number }>,
  }),
  actions: {
    async searchMovies(query: string) {
      if (query.trim()) {
        try {
          const data = await fetchMovies(query);
          console.log(data.docs);
          
          this.movies = data.docs; // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
      }
    },
  },
});
