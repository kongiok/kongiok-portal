<script setup lang="ts">
let AuthorName = "Ong Kong Giok";
let AuthorTitle = "Software Engineer";
let AuthorPicture = "/images/capybara_profile.png";
</script>

<template>
  <div class="min-h-dvh min-w-dvw h-full w-full bg-surface">
    <section class="hero">
      <div class="hero--picture">
        <img :src="AuthorPicture" :alt="`Picture of ${AuthorName}`">
      </div>
      <div class="hero--titles">
        <h1>{{ AuthorName }}</h1>
        <h2>{{ AuthorTitle }}</h2>
      </div>
    </section>
  </div>
</template>

<style>
</style>
