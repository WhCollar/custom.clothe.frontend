<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const isFooterShow = ref(true);

const router = useRouter();

watch(
  () => router.currentRoute.value,
  () => {
    isFooterShow.value = router.currentRoute.value.name != 'briefing';
  },
);
</script>

<template>
  <footer>
    <section>
      <div class="bg-rose-400 py-0.5">
        <!--   Нужен логотип или название   -->
        <div class="w-fit mx-auto">LG</div>
      </div>
    </section>
  </footer>
</template>
