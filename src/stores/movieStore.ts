
// src/stores/movieStore.ts
import { defineStore } from 'pinia';
import { fetchSearchQuery, fetchMovies } from '@/api';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Array<{ id: number; name: string; year: number; poster: { url: string} }>,
    allMovies: [] as Array<{ id: number; name: string; year: number; poster: { url: string }}>,
  }),
  actions: {
    async searchQuery(query: string) {
      if (query.trim()) {
        try {
          const data = await fetchSearchQuery(query);
          console.log(data.docs);
          
          this.movies = data.docs; // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
      }
    },
    async fetchCollection () {
        try {
          const data = await fetchMovies();
          console.log(data.docs);
          
          this.allMovies = data.docs; // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
    },
  },
});
