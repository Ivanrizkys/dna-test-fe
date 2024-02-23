<script setup lang="ts">
import CardNews from "@/components/CardNews.vue"

const test = [1,2,3,4,5,6,7,8]
</script>

<template>
  <section class="grid lg:grid-cols-4 py-10 gap-7">
      <CardNews v-for="_ in test" />
  </section>
</template>