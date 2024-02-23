<template>
  <nav class="flex justify-between items-center py-10">
    <div>
      <router-link to="/" class="flex items-center gap-4">
        <div class="w-10 h-10 bg-gray-500 rounded flex items-center justify-center shadow-2xl">N</div>
        News
      </router-link>
    </div>
    <div>
      <!-- <input type="text" placeholder="Search..." class="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg"> -->
      <router-link to="/search">Search</router-link>
    </div>
  </nav>
</template>