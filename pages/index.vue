<template>
  <main>
    <section class="alley grid lg:grid-cols-12 gap-6">
      <div class="lg:col-span-4 flex flex-col gap-6">
        <CardUser />
        <CardQr />
      </div>
      <CardProducts class="lg:col-span-8 bg-white" />
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
