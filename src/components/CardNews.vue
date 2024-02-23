<script setup lang="ts">
import dayjs from "dayjs";

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
  <article>
    <div class="w-full aspect-[1.5/1] rounded-xl overflow-hidden group">
      <img
        :src="image"
        :alt="title + ' image'"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div class="flex items-center gap-1 text-white/60 mt-5">
      <p class="line-clamp-1">{{ author }}</p>
      <span>.</span>
      <p class="text-nowrap">{{ dayjs(publishedAt).locale("id").format("ddd, DD MMMM hh:mm") }}</p>
    </div>
    <h2 class="text-2xl mt-4">
      {{ title }}
    </h2>
    <p class="text-white/60 text-base line-clamp-4 mt-4">
      {{ description }}
    </p>
  </article>
</template>
