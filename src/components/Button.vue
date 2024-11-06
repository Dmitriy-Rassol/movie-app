<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    @click="emit('search')"
  >
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
