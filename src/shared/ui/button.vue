<script setup lang="ts">
withDefaults(
  defineProps<{
    styleType?: 'primary' | 'ghost';
  }>(),
  {
    styleType: 'primary',
  },
);
</script>

<template>
  <button
    :styleType="styleType"
    class="text-2xl px-9 py-3 rounded-lg border-dark-gray"
    :class="{
      'bg-primary-button text-primary-button': styleType == 'primary',
      'border border-dark-gray': styleType == 'ghost',
    }"
  >
    <slot />
  </button>
</template>
