<template>
  <header>
    <div class="container">
      <nuxt-link to="/">Portfolio</nuxt-link>
      <ul class="menu">
        <li class="menu-list" v-for="item in menuList"><nuxt-link :to="'#' + item.name" v-if="!route.path.includes('/project')">{{ item.name }}</nuxt-link></li>
        <li class="menu-list icon" :title="colorMode === 'dark' ? '라이트모드' : '다크모드'" @click="themeChange">
          <transition name="fade">
            <img src="/assets/images/icon/icon_sun.png" alt="sun" v-if="colorMode === 'dark'">
            <img src="/assets/images/icon/icon_moon.png" alt="moon" v-else-if="colorMode === 'light'">
          </transition>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
const route = useRoute();
const { $storage } = useNuxtApp();
const { colorMode } = $storage;

// 2024.09.10[cgnoh]: 아이콘 변화 이벤트
const themeChange = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

// 2024.09.11[cgnoh]: 메뉴 리스트
const menuList = ref([
  {
    name: 'Introduce'
  },
  {
    name: 'Skills'
  },
  {
    name: 'Tools'
  },
  {
    name: 'Project'
  },
  {
    name: 'Contact'
  }
]);
</script>
<style lang="scss" scoped>
@import '/assets/scss/components/header.scss';
</style>