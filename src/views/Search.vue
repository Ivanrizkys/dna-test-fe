<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "lodash";
import { News } from "@/types/news";
import CardNews from "@/components/CardNews.vue";
import { useQuery } from '@tanstack/vue-query'
import CardNewsLoader from "@/components/CardNewsLoader.vue";

const search = ref<string>("javascript");

const {data: news, isLoading} = useQuery<News>({
  queryKey: ["news", search, "publishedAt"],
  queryFn: () => fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=5af0d54a9d6546b19029a514c4d40652&q=${search.value}`).then((res) => res.json())
})

const handleSearch = debounce((event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value === "") {
    search.value = "javascript";
  } else {
    search.value = value;
  }
}, 500);
</script>

<template>
  <section class="py-10">
    <div class="mx-auto w-full max-w-96 2xl:w-1/4">
      <input
        type="text"
        placeholder="Search..."
        class="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg"
        @input="handleSearch"
      />
    </div>
  </section>
  <template v-if="!isLoading">
    <section
      v-if="news && news.articles.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5 gap-7"
    >
      <CardNews
        v-for="data in news.articles"
        :title="data?.title"
        :published-at="data?.publishedAt"
        :author="data?.author ?? ''"
        :href="data?.url"
        :description="data?.description"
        :image="data?.urlToImage ?? ''"
      />
    </section>
    <section class="py-5 text-center" v-if="news && news.articles.length === 0">
      <h2 className="text-6xl">No result 😥</h2>
      <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
        We couldn’t find any posts with the keyword {{ search }}. Please try
        another keyword.
      </p>
    </section>
  </template>
  <template v-if="isLoading">
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5 gap-7">
      <CardNewsLoader v-for="_ in [1, 2, 3, 4, 5, 6, 7, 8]" />
    </section>
  </template>
</template>
