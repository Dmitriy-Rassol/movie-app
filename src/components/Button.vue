<template>
  <button @click="emit('search')">
    {{ label }}
  </button>
</template>

<script setup lang="ts">

const emit = defineEmits(["search"]);
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "",
  },
});

</script>

<style scoped lang="scss">

</style>
