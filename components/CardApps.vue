<template>
  <div class="">
    <h1 class="text-slate-900  dark:text-slate-200 font-bold text-center text-2xl mb-4">Mis Apps Free </h1>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="record in projects" :key="record.id"
        class="max-w-md bg-white dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
        <div class="p-4">
          <img class="rounded-xl" :src="`${record.image_url}`" :alt="record.title" />
          <div class="items-center mt-2">
            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-bold">{{ record.title }}</h1>
            <!-- <p class="text-gray-900 dark:text-gray-100">{{ record.description }}</p> -->
          </div>
        </div>
        <div class="flex p-6  justify-center ">
          <div class="flex  justify-between w-full max-w-lg">
            <a :href="record.project_url" target="_blank" rel="noopener noreferrer"
              class="flex space-x-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                </svg>
              </span>
              <span class="text-gray-700 dark:text-gray-300 font-semibold">Demo</span>
            </a>
            <!-- <a :href="record.code_url" target="_blank" rel="noopener noreferrer"
              class="flex space-x-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </span>
              <span class="text-gray-700 dark:text-gray-300 font-semibold">Código</span>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Record } from '~/interfaces/Record';
const id = 2;
const { data: projects, error } = await useFetch(`/api/v1/projectsByCategoryId/${id}`)

</script>
