
// src/stores/movieStore.ts
import { defineStore } from 'pinia';
import { fetchSearchQuery, fetchMovies } from '@/api';
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
          console.log(data.docs);
          
          this.movies = data.docs.filter((movie: Movie) => movie.poster && movie.poster.url !== null && movie.title !== null); // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
      }
    },
    async fetchCollection (type:string = '') {
        try {
          const data = await fetchMovies(type);
          console.log(data.docs);
          
          this.allMovies = data.docs.filter((movie: Movie) => movie.poster && movie.poster.url !== null && movie.title !== null); // Предполагаем, что данные находятся в docs
        } catch (error) {
          console.error('Ошибка при поиске фильмов:', error);
        }
    },
  },
});
