<template>
  <article class="grid md:grid-cols-2 gap-5 lg:grid-cols-1">
    <div class="w-full aspect-video md:aspect-square lg:aspect-video bg-white rounded-xl overflow-hidden">
      <img src="https://epictetus.vercel.app/thumbnail-2.png" alt="banner" class="w-full h-full object-cover">
    </div>
    <div>
      <div class="flex items-center gap-1 text-white/60">
        <p>Internet</p>
        <span>.</span>
        <p>June, 28, 2024</p>
      </div>
      <h2 class="text-2xl lg:text-3xl mt-4 font-bold">
        <router-link to="/post-detail">
          How to design a product that can grow itself 10x in year
        </router-link>
      </h2>
      <p class="text-white/60 text-base lg:text-lg line-clamp-4 mt-4">Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.</p>
      <div class="flex items-center gap-4 mt-5">
        <img src="https://epictetus.vercel.app/author-2.png" alt="author" class="w-14 h-14 rounded-full object-cover">
        <div>
          <h3 class="lg:text-lg">Jenny Wilson</h3>
          <p class="text-white/60 text-sm lg:text-base mt-1">Entrepreneur</p>
        </div>
      </div>
    </div>
  </article>
</template>