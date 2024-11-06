<template>
  <div>
    <img :src="props.src" :alt="props.alt" class="w-full h-auto" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  rounded: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: false
  },
  hoverEffect: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
img {
  @apply rounded-md;
}

img.rounded {
  @apply rounded-full;
}

img.shadow {
  @apply shadow-md;
}

img.hover-effect:hover {
  @apply shadow-lg;
}

</style>
