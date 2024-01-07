<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { RouterEnum } from 'shared/model/router';
import { Drawer, Container, Bars3 } from 'shared/ui';
import { Menu } from 'shared/ui/menu';
import { menuItems } from './config';

const router = useRouter();
const isMobileMenuShow = ref(false);

watch(
  () => router.currentRoute.value,
  () => (isMobileMenuShow.value = false),
);
</script>

<template>
  <header>
    <Container class="bg-girl bg-no-repeat bg-right bg-contain">
      <div
        class="h-[64px] text-zinc-700 flex items-center max-sm:justify-between"
      >
        <!--   Нужен логотип или название   -->
        <div
          class="font-semibold text-6xl cursor-pointer md:mr-[64px]"
          @click="router.push({ name: RouterEnum.Main })"
        >
          LG
        </div>
        <Menu class="max-sm:hidden text-2xl" :items="menuItems" />
        <div class="sm:hidden">
          <div @click="isMobileMenuShow = !isMobileMenuShow">
            <Bars3 />
          </div>
          <Drawer v-model:show="isMobileMenuShow">
            <template #content>
              <Menu vertical :items="menuItems" />
            </template>
          </Drawer>
        </div>
      </div>
      <slot />
    </Container>
  </header>
</template>
