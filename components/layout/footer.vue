<template>
  <footer>
    <div class="container">ⓒ 2024 CHANGYUNOH. All rights reserved.</div>
    <button type="button" class="top-button" @click="btnTop">
      <i class="icon" />
    </button>
  </footer>
</template>
<script setup>
// 2024.03.18[bnJung]: 탑버튼 클릭이벤트
const btnTop = () => {
  window.scrollTo({
    top: 0, behavior: 'smooth'
  })
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/components/footer.scss';
</style>