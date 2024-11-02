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
      <div>
        <div v-for="movie in movies" :key="movie.id">
            <div>{{ movie.name }} ({{ movie.year }})</div>
            <img :src="movie.poster.url" alt="" />
        </div>
      </div>
    </div>
    <div v-else>
      <ul>
        <div v-for="movie in allMovies" :key="movie.id">
          <div>{{ movie.name }} ({{ movie.year }})</div>
          <img :src="movie.poster.url" alt="" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useMovieStore } from "@stores/movieStore"; // Импортируем хранилище

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
