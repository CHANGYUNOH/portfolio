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
        <li class="menu-list mob">
          <button type="button" class="mob-menu" @click="showNav">
            <span v-for="item in 3" />
          </button>
        </li>
      </ul>
    </div>
    <nav class="navigation" ref="hasNav">
      <nuxt-link to="/" class="btn-close" @click="btnClose">
        <span v-for="item in 2" />
      </nuxt-link>
      <ul class="mob-menu">
        <li class="mob-menu-list" v-for="item in menuList"><nuxt-link :to="'#' + item.name" class="mob-menu-link">{{ item.name }}</nuxt-link></li>
      </ul>
      <div class="footer">ⓒ 2024 CHANGYUNOH. All rights reserved.</div>
    </nav>
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

// 2024.09.22[cgnoh]: 모바일 메뉴 클릭 이벤트
const showNav = () => {
  document.querySelector('html').style.overflow = 'hidden';
  hasNav.value.style.transform = "translateX(0)";
}

// 2024.09.29[cgnoh]: 모바일 메뉴 닫기 이벤트
const btnClose = () => {
  document.querySelector('html').style.overflow = 'auto';
  hasNav.value.style.transform = "translateX(100%)";
}

const hasNav = ref();

</script>
<style lang="scss" scoped>
@import '/assets/scss/components/header.scss';
</style>