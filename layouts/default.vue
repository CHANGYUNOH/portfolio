<template>
  <div id="wrapper">
    <layout-header />

    <main>
      <slot />
    </main>

    <layout-footer />
  </div>
</template>
<style lang="scss" scoped>
#wrapper {
  background: #222;
  color: #fff;
}
</style>