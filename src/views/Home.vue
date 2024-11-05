<template>
  <div>
    <input
      v-model="searchQuery"
      placeholder="Поиск фильмов"
      @keydown.enter="searchMovies"
    />
    <button @click="searchMovies">Поиск</button>

    <div v-for="(category, i) in categories" :key="i">
      <button @click="searchCategories(category.type)">
        {{ category.label }}
      </button>
    </div>

    <div v-if="movies.length">
      <MovieCard :movies="movies" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useMovieStore } from "@stores/movieStore"; // Импортируем хранилище
import MovieCard from "@/components/MovieCard.vue";
import { categories } from "@/shared/constant";

const movieStore = useMovieStore(); // Инициализируем хранилище
const searchQuery = ref("");

onMounted(async () => {
  await movieStore.fetchCollection(); // Загружаем все фильмы при монтировании компонента
});

// Функция для поиска фильмов по запросу
const searchMovies = async () => {
  await movieStore.searchQuery(searchQuery.value); // Вызываем действие из хранилища
};

// Функция для поиска фильмов по категории
const searchCategories = async (type) => {
  await movieStore.fetchCollection(type); // Загружаем фильмы по выбранной категории
};

// Вычисляемое свойство для получения списка фильмов
const movies = computed(() => movieStore.movies || movieStore.allMovies);
</script>

<style scoped lang="scss">
/* Добавьте стили, если необходимо */
</style>
