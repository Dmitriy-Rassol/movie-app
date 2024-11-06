<template>
  <div>
    <input
      v-model="searchQuery"
      placeholder="Поиск фильмов"
      @keydown.enter="searchMovies"
    />

    <Button @search="searchMovies" label="Поиск" />

    <div v-for="(category, index) in categories" :key="index">
      <Button @search="searchCategories(category.type)"  :label="category.label" />
    </div>

    <div v-if="movies.length">
      <MovieCard :movies="movies" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMovieStore } from '@stores/movieStore'; // Импортируем хранилище
import { categories } from '@/shared/constant';

import MovieCard from '@/components/MovieCard.vue';
import Button from '@/components/Button.vue';

const movieStore = useMovieStore(); // Инициализируем хранилище
const searchQuery = ref('');

onMounted(async () => {
  await movieStore.fetchCollection(); // Загружаем все фильмы при монтировании компонента
});

// Функция для поиска фильмов по запросу
const searchMovies = async () => {
  if (searchQuery.value.trim()) { // Проверяем, что запрос не пустой
    await movieStore.searchQuery(searchQuery.value); // Вызываем действие из хранилища
  }
};

// Функция для поиска фильмов по категории
const searchCategories = async (type) => {
  await movieStore.fetchCollection(type); // Загружаем фильмы по выбранной категории
};

// Вычисляемое свойство для получения списка фильмов
const movies = computed(() => movieStore.movies || movieStore.allMovies);
</script>

<style scoped lang="scss">

</style>
