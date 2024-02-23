<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";

// import Home from '@/views/Home.vue';
</script>

<template>
  <main class="bg-gradient-to-b from-gray-600 to-gray-900 min-h-dvh text-white">
    <div class="container mx-auto px-10">
      <Navbar />
      <RouterView />
    </div>
  </main>
</template>
