
// src/stores/movieStore.ts
import { defineStore } from 'pinia';
import { fetchSearchQuery, fetchMoviesCollection } from '@/api';
interface Movie {
  title: string;
  poster: {
      url: string | null;
  } | null;
  // другие свойства фильма
}
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
          this.movies = data.docs.filter((movie: Movie) => movie.poster && movie.poster.url !== null && movie.title !== null); // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
      }
    },
    async fetchCollection (type:string = '') {
        try {
          const data = await fetchMoviesCollection(type);
          this.movies = data.docs.filter((movie: Movie) => movie.poster && movie.poster.url !== null && movie.title !== null); // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
    },
  },
});
