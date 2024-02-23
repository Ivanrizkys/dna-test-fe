<script setup lang="ts">
// defineProps<{ loaderVariant?: boolean }>()
</script>

<template>
  <article>
    <div class="w-full aspect-[1.5/1] rounded-xl overflow-hidden group">
      <img src="https://epictetus.vercel.app/thumbnail-2.png" alt="banner" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
    </div>
    <div class="flex items-center gap-1 text-white/60 mt-5">
      <p>Internet</p>
      <span>.</span>
      <p>June, 28, 2024</p>
    </div>
    <h2 class="text-2xl mt-4">
      <router-link to="/post-detail">
        How to design a product that can grow itself 10x in year
      </router-link>
    </h2>
    <p class="text-white/60 text-base line-clamp-4 mt-4">Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.</p>
    <div class="flex items-center gap-4 mt-5">
      <img src="https://epictetus.vercel.app/author-2.png" alt="author" class="w-14 h-14 rounded-full object-cover">
      <div>
        <h3>Jenny Wilson</h3>
        <p class="text-white/60 text-sm mt-1">Entrepreneur</p>
      </div>
    </div>
  </article>
</template>