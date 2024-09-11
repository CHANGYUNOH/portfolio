<template>
  <header>
    <div class="container">
      <nuxt-link to="/">Portfolio</nuxt-link>
      <ul class="menu">
        <li class="menu-list">Introduce</li>
        <li class="menu-list">Skills</li>
        <li class="menu-list">Tools</li>
        <li class="menu-list">Project</li>
        <li class="menu-list">Contact</li>
        <li class="menu-list icon" @click="iconChange">
          <transition name="fade">
            <img src="/assets/images/icon/icon_sun.png" alt="sun" v-if="showIcon">
            <img src="/assets/images/icon/icon_moon.png" alt="moon" v-else>
          </transition>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
// 2024.09.10[cgnoh]: 아이콘 변화 이벤트
const showIcon = ref(true);
const iconChange = () => {
  showIcon.value = !showIcon.value;
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/components/header.scss';
</style>