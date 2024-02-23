<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import CardNews from "@/components/CardNews.vue";
import CardNewsLoader from '@/components/CardNewsLoader.vue';
import CardNewsFeatured from "@/components/CardNewsFeatured.vue";
import CardNewsFeaturedLoader from "@/components/CardNewsFeaturedLoader.vue"

const {data: byPopularity, isLoading: byPopularityLoading} = useQuery({
  queryKey: ["news", "javascript", "popularity"],
  queryFn: () => fetch(`https://newsapi.org/v2/everything?sortBy=popularity&apiKey=5af0d54a9d6546b19029a514c4d40652&q=javascript`).then((res) => res.json())
})
const {data: byRecentAdd, isLoading: byRecentAddLoading} = useQuery({
  queryKey: ["news", "javascript", "publishedAt"],
  queryFn: () => fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=5af0d54a9d6546b19029a514c4d40652&q=javascript`).then((res) => res.json())
})
</script>

<template>
  <h1 class="text-3xl font-bold mt-10">Most Popular</h1>
  <section v-if="!byPopularityLoading" class="grid grid-cols-1 lg:grid-cols-2 py-8 gap-y-14 gap-x-7">
    <aside>
      <CardNewsFeatured
        v-if="byPopularity"
        :title="byPopularity?.articles[0].title"
        :published-at="byPopularity?.articles[0].publishedAt"
        :author="byPopularity?.articles[0].author ?? ''"
        :href="byPopularity?.articles[0].url"
        :description="byPopularity?.articles[0].description"
        :image="byPopularity?.articles[0].urlToImage ?? ''"
      />
    </aside>
    <aside class="grid grid-cols-1 sm:grid-cols-2 gap-7">
      <template v-if="byPopularity">
        <CardNews
          v-for="data in byPopularity.articles.slice(1, 5)"
          :title="data?.title"
          :published-at="data?.publishedAt"
          :author="data?.author ?? ''"
          :href="data?.url"
          :description="data?.description"
          :image="data?.urlToImage ?? ''"
        />
      </template>
    </aside>
  </section>
  <!-- state if section most popular loading -->
  <section v-if="byPopularityLoading" class="grid grid-cols-1 lg:grid-cols-2 py-8 gap-y-14 gap-x-7">
    <aside>
      <CardNewsFeaturedLoader />
    </aside>
    <aside class="grid grid-cols-1 sm:grid-cols-2 gap-7">
      <CardNewsLoader v-for="_ in [1, 2, 3, 4]"/>
    </aside>
  </section>

  <h1 class="text-3xl font-bold mt-10">Recent Add</h1>
  <section v-if="!byRecentAddLoading" class="grid grid-cols-1 lg:grid-cols-2 py-8 gap-y-14 gap-x-7">
    <aside class="grid grid-cols-1 sm:grid-cols-2 gap-7">
      <template v-if="byRecentAdd">
        <CardNews
          v-for="data in byRecentAdd.articles.slice(1, 5)"
          :title="data?.title"
          :published-at="data?.publishedAt"
          :author="data?.author ?? ''"
          :href="data?.url"
          :description="data?.description"
          :image="data?.urlToImage ?? ''"
        />
      </template>
    </aside>
    <aside>
      <CardNewsFeatured
        v-if="byRecentAdd"
        :title="byRecentAdd?.articles[0].title"
        :published-at="byRecentAdd?.articles[0].publishedAt"
        :author="byRecentAdd?.articles[0].author ?? ''"
        :href="byRecentAdd?.articles[0].url"
        :description="byRecentAdd?.articles[0].description"
        :image="byRecentAdd?.articles[0].urlToImage ?? ''"
      />
    </aside>
  </section>
  <!-- state if section recent add loading -->
  <section v-if="byRecentAddLoading" class="grid grid-cols-1 lg:grid-cols-2 py-8 gap-y-14 gap-x-7">
    <aside class="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <CardNewsLoader v-for="_ in [1, 2, 3, 4]"/>
    </aside>
    <aside>
        <CardNewsFeaturedLoader />
    </aside>
  </section>

</template>
@/service/news
