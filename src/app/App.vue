<script setup lang="ts">
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
body {
  font-family: 'Luxurious Roman', serif;
}
</style>
