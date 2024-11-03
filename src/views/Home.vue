<template>
  <div>
    <input
      v-model="searchQuery"
      placeholder="Поиск фильмов"
      @keydown.enter="searchMovies"
    />
    <button @click="searchMovies">Поиск</button>

    <button @click="searchCatergories('movie')">Фильмы</button>
    <button @click="searchCatergories('tv-series')">Сериалы</button>
    <button @click="searchCatergories('cartoon')">Мультфильмы</button>
    <button @click="searchCatergories('anime')">Аниме</button>


    <div v-if="movies.length">
      <h2>Результаты поиска:</h2>
      <div v-for="movie in movies" :key="movie.id">
        <div>
          <img
            v-if="movie.poster.url"
            :src="movie.poster.url"
            :alt="`${movie.name} poster`"
          />
          <div v-else>
            <p>No poster available</p>
          </div>
          <div>{{ movie.name }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="movie in allMovies" :key="movie.id">
        <div v-show="movie.poster.url">
          <img
           v-if="movie.poster.url"
            :src="movie.poster.url"
            :alt="`${movie.name} poster`"
          />
          <div v-else>
            <p>No poster available</p>
          </div>
          <div>{{ movie.name }} </div>
        </div>
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

const searchCatergories = async (type) => {
  await movieStore.fetchCollection(type); // Загружаем все фильмы при монтировании компонента
};


const movies = computed(() => movieStore.movies);
const allMovies = computed(() => movieStore.allMovies);
</script>

<style scoped lang="scss">
img {
  width: 200px;
}
</style>
