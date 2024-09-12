<template>
  <div id="wrapper" :data-main-theme="colorMode">
    <layout-header />

    <main>
      <slot />
    </main>

    <layout-footer />
  </div>
</template>
<script setup>
const { $storage } = useNuxtApp();
const { colorMode } = $storage;
</script>
<style lang="scss" scoped>
/*#wrapper {
  background: #222;
  color: #fff;
}*/
</style>