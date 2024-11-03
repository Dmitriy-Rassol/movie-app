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
      <div v-for="movie in movies" :key="movie.id">
        <img :src="movie.poster.url" alt="" />
        <div>{{ movie.name }} {{ movie.year }}</div>
      </div>
    </div>
    <div v-else>
      <div v-for="movie in allMovies" :key="movie.id">
        <img :src="movie.poster.url" alt="" />
        <div>{{ movie.name }} {{ movie.year }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useMovieStore } from "@stores/movieStore"; // Импортируем хранилище

const movieStore = useMovieStore(); // Инициализируем хранилище
const searchQuery = ref("");

onMounted(async () => {
  await movieStore.fetchCollection(); // Загружаем все фильмы при монтировании компонента
});

const searchMovies = async () => {
  await movieStore.searchQuery(searchQuery.value); // Вызываем действие из хранилища
};

const movies = computed(() => movieStore.movies);
const allMovies = computed(() => movieStore.allMovies);
</script>

<style scoped lang="scss">
img {
  width: 200px;
}
</style>
