// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      title: 'WillBe DEFAULT NUXT PROJECT',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'title', content: '사이트타이틀' }, // meta description
        { hid: 'description', name: 'description', content: '사이트설명문구' }, // meta description
          // 오픈그래프추가
        {
          hid: 'og-title',
          property: 'og:title',
          content: '오픈그래프타이틀',
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: '오픈그래프설명문구',
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: '/ogImage.png',
        },
      ],
    },
  },

  vite: { // 공통 변수 scss
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/base/variables.scss";', // mixin과 scss 변수
        },
      },
    },
  },

  //전역 scss
  css: [
    '@/assets/scss/base/iconfont.scss',   // 아이콘폰트
    '@/assets/scss/base/reset.scss',      // 기본 css 초기화 & root 변수
    '@/assets/scss/base/layout.scss',     // 기본레이아웃
    '@/assets/scss/base/animation.scss',  // keyframes 또는 transition animation
    '@/assets/scss/base/common.scss'      // 공통요소(ex. input, button 등)
  ],

  fontLoader: {
    local: [
      {
        src: '/fonts/elice/EliceDXNeolliOTF-Light.woff2',
        family: 'EliceNeolli',
        weight: '300',
        style: 'normal',
        display: 'swap',
      },
      {
        src: '/fonts/elice/EliceDXNeolliOTF-Medium.woff2',
        family: 'EliceNeolli',
        weight: '400',
        style: 'normal',
        display: 'swap',
      },
      {
        src: '/fonts/elice/EliceDXNeolliOTF-Bold.woff2',
        family: 'EliceNeolli',
        weight: 'bold',
        style: 'normal',
        display: 'swap',
      },
      {
        src: '/fonts/roboto/roboto-400.woff2',
        family: 'Roboto',
        weight: '400',
        style: 'normal',
        display: 'swap',
        class: 'font-roboto'
      },
      {
        src: '/fonts/roboto/roboto-700.woff2',
        family: 'Roboto',
        weight: '700',
        style: 'normal',
        display: 'swap',
        class: 'font-roboto'
      },
      {
        src: '/fonts/roboto/roboto-900.woff2',
        family: 'Roboto',
        weight: '900',
        style: 'normal',
        display: 'swap',
        class: 'font-roboto'
      },
      {
        src: '/fonts/wbIconFont/wbIconFont.ttf',
        family: 'wbIconFont',
        weight: 'normal',
        style: 'normal',
        display: 'block',
      }
    ]
  },

  modules: ['nuxt-font-loader'],
  compatibilityDate: '2024-09-02',
})