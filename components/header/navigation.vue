<script lang="ts" setup>
const nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Gifts",
    path: "/gifts",
  },
];
</script>

<template>
  <nav class="hidden lg:flex text-[#828282] text-lg font-normal">
    <ul class="flex items-center gap-10">
      <li v-for="link in nav" class="relative">
        <NuxtLink :to="link.path">
          {{ link.name }}
          <span
            class="cust-indi hidden absolute w-full h-1.5 rounded-t-lg bg-[#D20653] -bottom-6 right-1/2 translate-x-1/2"
          ></span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
nav .router-link-active {
  @apply font-bold text-[#D20653];
}

nav .router-link-active span {
  @apply flex;
}
</style>
