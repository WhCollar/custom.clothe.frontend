<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'ghost';
  }>(),
  {
    type: 'primary',
  },
);
</script>

<template>
  <button
    :type="type"
    class="text-2xl px-9 py-3 rounded-lg border-dark-gray"
    :class="{
      'bg-primary-button text-primary-button': type == 'primary',
      'border border-dark-gray': type == 'ghost',
    }"
  >
    <slot />
  </button>
</template>
