<template>
    <div>
      <div v-for="movie in props.movies" :key="movie.id">
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
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    movies: {
      type: Array as () => Array<{ id: number; name: string; poster: { url: string } }>,
      required: true,
      default: () => [],
    },
  });
  
  </script>
  
  <style scoped lang="scss">
  img {
    width: 200px;
  }
  </style>
  