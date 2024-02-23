<script setup lang="ts">
import dayjs from "dayjs";
import { toRefs } from "vue";

const props = defineProps<{
  image: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  href: string;
}>();

const { href, image, title } = toRefs(props);

const handleClick = () => {
  const alreadyWatched = JSON.parse(localStorage.getItem("watched") as string)  
  const watched = [
    ...alreadyWatched,
    {
      href: href.value,
      image: image.value,
      title: title.value,
    },
  ];

  localStorage.setItem("watched", JSON.stringify(watched));
  window.open(href.value);
};
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
      <p class="text-nowrap">
        {{ dayjs(publishedAt).format("ddd, DD MMMM hh:mm") }}
      </p>
    </div>
    <h2 @click="handleClick" class="text-2xl mt-4 cursor-pointer">
      {{ title }}
    </h2>
    <p class="text-white/60 text-base line-clamp-4 mt-4">
      {{ description }}
    </p>
  </article>
</template>
