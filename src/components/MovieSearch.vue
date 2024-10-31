<template>
  <div>
    <input
      v-model="searchQuery"
      placeholder="Поиск фильмов"
      @keydown.enter="searchMovies"
    />
    <button @click="searchMovies">Искать</button>
    <div v-if="movies.length">
      <h2>Результаты поиска:</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
         
            {{ movie.name }} ({{ movie.year }})
            <img :src="movie.poster.url" alt="" />
          
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li v-for="movie in allMovies" :key="movie.id">
          
            {{ movie.name }} ({{ movie.year }})
            <img :src="movie.poster.url" alt="" />
         
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useMovieStore } from "../stores/movieStore"; // Импортируем хранилище

const movieStore = useMovieStore(); // Инициализируем хранилище
const searchQuery = ref("");

onMounted(async () => {
  await movieStore.fetchAllMovies(); // Загружаем все фильмы при монтировании компонента
});

const searchMovies = async () => {
  await movieStore.searchMovies(searchQuery.value); // Вызываем действие из хранилища
};

const movies = computed(() => movieStore.movies);
const allMovies = computed(() => movieStore.allMovies);
</script>

<style scoped>
/* Добавьте стили по вашему усмотрению */
</style>
