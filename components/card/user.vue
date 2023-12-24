<template>
  <div class="grid-bases">
    <div class="">
      <div
        class="w-20 h-20 lg:w-[100px] lg:h-[100px] bg-blue-200 rounded-[20px]"
      ></div>
      <h2
        class="capitalize text-lg lg:text-2xl font-bold text-[#333333] mt-2 lg:mt-4"
      >
        Hala Ahmed
      </h2>
      <p class="text-[#4F4F4F] text-sm mt-1 lg:mt-3">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
    </div>

    <div class="mt-4 grid grid-cols-3 gap-1.5">
      <div
        class="flex items-center gap-1 bg-[#FFF5E9] rounded-[18px] px-2 py-4"
      >
        <AtomIconUser />
        <div class="flex flex-col">
          <span class="text-sm font-bold">5</span>
          <span class="text-xs text-[#FF951D]">Following</span>
        </div>
      </div>

      <div
        class="flex items-center gap-1 bg-[#FFF5E9] rounded-[18px] px-2 py-4"
      >
        <AtomIconFollowers />
        <div class="flex flex-col">
          <span class="text-sm font-bold">5</span>
          <span class="text-xs text-[#FF951D]">Following</span>
        </div>
      </div>

      <div
        class="flex items-center gap-1 bg-[#FFF5E9] rounded-[18px] px-2 py-4"
      >
        <AtomIconRating />
        <div class="flex flex-col">
          <span class="text-sm font-bold">5</span>
          <span class="text-xs text-[#FF951D]">Following</span>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <button class="py-3 w-full follow-button-cta text-white font-bold">Follow</button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
