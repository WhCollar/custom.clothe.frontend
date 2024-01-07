<script setup lang="ts">
import { useRouter } from 'vue-router';
import MenuItem from './menu.item.vue';
import { Props } from './model';

defineProps<Props>();
const router = useRouter();
</script>

<template>
  <div :class="vertical ? 'flex-col items-start' : 'flex items-center'">
    <MenuItem
      v-for="(item, index) in items"
      :key="index"
      :label="item.label"
      :route-name="item.routeName"
      :hash="item.hash"
      :as-button="item.asButton"
      :class="{
        'mr-[64px]': !vertical,
        'w-full mb-5': vertical,
      }"
      @click="(e) => router.push(e)"
    />
  </div>
</template>
