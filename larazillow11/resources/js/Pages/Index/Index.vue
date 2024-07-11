<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 p-4">
    <div class="text-2xl font-bold mb-4 text-gray-300">Index Page</div>
    <Link href="/hello" class="btn-primary mb-4">Show Page</Link>
    <div class="text-lg text-gray-700 dark:text-gray-300">
      The message is <span class="font-semibold text-gray-900 dark:text-gray-300">{{ message }}</span>
    </div>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
defineProps({ message: String })
</script>