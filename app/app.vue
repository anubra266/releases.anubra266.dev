<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <NuxtPage />
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-[#111] text-gray-700 dark:text-gray-200 font-sans;
}
</style>
