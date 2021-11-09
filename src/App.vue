<script setup>

</script>

<template>
  <nav class="bg-gray-600 text-gray-200 py-5 text-center">
    <router-link to="/" class="mr-10">Weather</router-link>
    <router-link to="/favorites">Favorites</router-link>
  </nav>
  <div class="container w-1/2 mx-auto px-4">
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
