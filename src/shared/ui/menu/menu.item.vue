<script setup lang="ts">
import { Item } from './model';

defineProps<Item>();
const emit = defineEmits<{
  (e: 'click', data: { name: string; hash: string | undefined }): void;
}>();
</script>

<template>
  <div
    class="cursor-pointer"
    :class="{
      'py-0.5 px-3 rounded-lg border border-zinc-400 text-center': asButton,
    }"
    @click="() => emit('click', { name: routeName, hash: hash })"
  >
    <a>
      {{ label }}
    </a>
  </div>
</template>
