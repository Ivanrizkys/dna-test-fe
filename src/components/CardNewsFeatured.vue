<script setup lang="ts">
import dayjs from "dayjs"

defineProps<{
  image: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  href: string;
}>();
</script>

<template>
  <article class="grid md:grid-cols-2 gap-5 lg:grid-cols-1">
    <div
      class="w-full aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden"
    >
      <img
        :src="image"
        :alt="title + ' image'"
        class="w-full h-full object-cover"
      />
    </div>
    <div>
      <div class="flex items-center gap-1 text-white/60">
        <p class="line-clamp-1">{{ author }}</p>
        <span>.</span>
        <p class="text-nowrap">{{ dayjs(publishedAt).locale("id").format("ddd, DD MMMM hh:mm") }}</p>
      </div>
      <h2 class="text-2xl lg:text-3xl mt-4 font-bold">
        {{ title }}
      </h2>
      <p class="text-white/60 text-base lg:text-lg line-clamp-4 mt-4">
        {{ description }}
      </p>
    </div>
  </article>
</template>
