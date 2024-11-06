<template>
    <div>
      <div v-for="movie in props.movies" :key="movie.id">
        <div>
          <Image
            v-if="movie.poster.url"
            :src="movie.poster.url"
            :alt="`${movie.name} poster`"
            class="tw-48"
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
  import Image from './Image.vue';
  const props = defineProps({
    movies: {
      type: Array as () => Array<{ id: number; name: string; poster: { url: string } }>,
      required: true,
      default: () => [],
    },
  });
  
  </script>
  
  <style scoped lang="scss">

  </style>
  