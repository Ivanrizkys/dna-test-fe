<script setup lang="ts">
import CardNews from "@/components/CardNews.vue"
import CardNewsLoader from '@/components/CardNewsLoader.vue';
import CardNewsFeatured from "@/components/CardNewsFeatured.vue"
import CardNewsFeaturedLoader from "@/components/CardNewsFeaturedLoader.vue"

const test = [1,2,3,4]
</script>

<template>
  <section class="grid lg:grid-cols-2 py-10 gap-y-14 gap-x-7">
    <aside>
      <CardNewsFeatured />
    </aside>
    <aside class="grid sm:grid-cols-2 gap-7">
      <CardNews v-for="_ in test" />
    </aside>
  </section>
  <section class="grid lg:grid-cols-2 py-10 gap-y-14 gap-x-7">
    <aside>
      <CardNewsFeaturedLoader />
    </aside>
    <aside class="grid sm:grid-cols-2 gap-7">
      <CardNewsLoader v-for="_ in test" />
    </aside>
  </section>
</template>