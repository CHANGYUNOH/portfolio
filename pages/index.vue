<template>
  <div class="container">

    <!-- 배너 -->
    <div class="banner" id="Introduce">
      <div class="banner-image" :class="{ 'is-active' : bannerImage }" @click="bannerImage = !bannerImage">
        <img src="/assets/images/default/profile.jpg" class="front" alt="프로필 이미지">
        <ul class="back">
          <li class="back-list"><span class="tit">노찬규</span>｜남, 1994 (30세)</li>
          <li class="back-list"><span class="tit">경력</span>｜4년차</li>
          <li class="back-list"><span class="tit">Email</span>｜nohx051@naver.com</li>
          <li class="back-list"><span class="tit">Phone</span>｜010-6651-1375</li>
          <li class="back-list"><span class="tit">주소</span>｜서울 금천구 가산동</li>
          <li class="back-list"><span class="tit">학력</span>｜대학졸업(4년제)</li>
          <li class="back-list"><span class="tit">스킬</span>｜html, scss, javascript, vue.js, nuxt.js, react.js</li>
          <li class="back-list"><span class="tit">능력</span>｜ #커뮤니케이션 #도전정신 #문제해결능력</li>
        </ul>
      </div>
      <div class="banner-text">
        <div class="banner-text-title">
          <p>안녕하세요!</p>
          <p><span class="line">솔루션 경험</span>을 바탕으로</p>
          <p>회사의 <span class="line">핵심인재</span>가 되겠습니다.</p>
        </div>
        <div class="banner-text-sub">
          <p>4년 차 웹 퍼블리셔, 노찬규입니다.</p>
          <p>교육 솔루션 개발 회사와 골프 시뮬레이션 제조업체에서 웹서비스를 개발하였습니다.</p>
          <p>솔루션사업본부의 팀원으로 합류되어서</p>
          <p>매출액 22%증가, 자산 19%증가에</p>
          <p>필요한 역량을 이바지 했던 경험이 있습니다.</p>
          <br>
          <p>맡은 바 책임감을 가지고 끝까지 문제를 해결하는것을 추구합니다.</p>
        </div>
      </div>
    </div>
    <!-- // 배너 -->

    <!-- 기술 -->
    <div class="row" id="Skills">
      <div class="title">Skills</div>
      <div class="cont">
        <div class="slider">
          <swiper :slidesPerView="1"
                  :spaceBetween="20"
                  :loop="true"
                  :breakpoints="{
                      '1200': { slidesPerView: 6 },
                      '1024': { slidesPerView: 4 },
                      '768' : { slidesPerView: 2 },
                  }">
            <swiper-slide class="item" v-for="(item, index) in skillList" :key="index">
              <p>{{ item.name }}</p>
              <img :src="`${item.url}`" :alt="item.name">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- // 기술 -->

    <!-- 도구 -->
    <div class="row" id="Tools">
      <div class="title">Tools</div>
      <div class="cont">
        <div class="slider">
          <swiper :slidesPerView="1"
                  :spaceBetween="20"
                  :loop="true"
                  :breakpoints="{
                      '1200': { slidesPerView: 6 },
                      '1024': { slidesPerView: 4 },
                      '768' : { slidesPerView: 2 },
                  }">
            <swiper-slide class="item" v-for="(item, index) in toolList" :key="index">
              <p>{{ item.name }}</p>
              <img :src="`${item.url}`" :alt="item.name">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- // 도구 -->

    <!-- 프로젝트 -->
    <div class="row" id="Project">
      <div class="title">Project</div>
      <div class="cont">
        <div class="slider project">
          <swiper :slidesPerView="1"
                  :spaceBetween="20"
                  :loop="true"
                  :centeredSlides="true"
                  :autoplay="{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }"
                  :modules="[Autoplay]"
                  :breakpoints="{
                      '1200': { slidesPerView: 1.8 },
                      '1024': { slidesPerView: 1.6 },
                      '768' : { slidesPerView: 1.4 }
                  }">
            <swiper-slide class="item"
                          :class="{
                          'bg-sky' : item.logo === projectHncareer,
                          'bg-green' : item.logo === projectHanabank || projectMetlife,
                          'bg-blue' : item.logo === projectAirforce,
                          'bg-gray' : item.logo === projectMobis ,
                          'bg-purple' : item.logo === projectGamification,
                          'bg-black' : item.logo === projectKnda,
                          'bg-white' : item.logo === projectHanati }"
                          :style="{backgroundImage: `url(${item.title})`}"
                          v-for="(item, index) in projectList" :key="index">
              <nuxt-link :to="`/project/${item.index}`" class="item-link">
                <span v-if="item.title !== projectSaasda && item.title !== projectOpenprompt && item.title !== projectActesg && item.title !== projectPopgolf">
                  <img :src="`${item.logo}`" :alt="item.logo">
                </span>
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- // 프로젝트 -->


    <!-- 연락처 -->
    <div class="row" id="Contact">
      <div class="title">Contact</div>
      <div class="cont">
        <ul class="contact">
          <li class="contact-list">name: NOHCHANGYU</li>
          <li class="contact-list">Email: nohx051@naver.com</li>
          <li class="contact-list">Phone: 010-6651-1375</li>
        </ul>
        <ul class="contact link">
          <li class="contact-list">
            <nuxt-link to="https://ncg1375.tistory.com" target="_blank" class="contact-list-link">
              <img src="/assets/images/icon/icon_tstory.png" alt="티스토리">
            </nuxt-link>
          </li>
          <li class="contact-list">
            <nuxt-link to="https://github.com/CHANGYUNOH" target="_blank" class="contact-list-link">
              <img src="/assets/images/icon/icon_github.png" alt="깃헙">
            </nuxt-link>
          </li>
          <li class="contact-list">
            <nuxt-link to="https://forested-cent-ed3.notion.site/0b840fc162744ef580df0ccce3ff12f9?pvs=4" target="_blank" class="contact-list-link notion">
              <img src="/assets/images/icon/icon_notion.png" alt="노션">
            </nuxt-link>
          </li>
          <li class="contact-list">
            <nuxt-link to="https://open.kakao.com/o/sYnLHKVg" target="_blank" class="contact-list-link kakao">
              <img src="/assets/images/icon/icon_kakao.png" alt="카카오톡">
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- // 연락처 -->

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import iconHtml from '~/assets/images/icon/icon_html.png';
import iconCss from '~/assets/images/icon/icon_css.png';
import iconScss from '~/assets/images/icon/icon_scss.png';
import iconJs from '~/assets/images/icon/icon_js.png';
import iconVue from '~/assets/images/icon/icon_vue.png';
import iconNuxt from '~/assets/images/icon/icon_nuxt.png';
import iconJquery from '~/assets/images/icon/icon_jquery.png';
import iconGulp from '~/assets/images/icon/icon_gulp.png';
import iconVite from '~/assets/images/icon/icon_vite.png';
import iconReact from '~/assets/images/icon/icon_react.png';

import iconPhotoshop from '~/assets/images/icon/icon_photoshop.png';
import iconGitlab from '~/assets/images/icon/icon_gitlab.png';
import iconGithub from '~/assets/images/icon/icon_github.png';
import iconTrello from '~/assets/images/icon/icon_trello.png';
import iconRedmine from '~/assets/images/icon/icon_redmine.png';
import iconSvn from '~/assets/images/icon/icon_svn.png';
import iconFigma from '~/assets/images/icon/icon_figma.png';
import iconSpreadsheet from '~/assets/images/icon/icon_spread_sheet.png';
import iconNotion from '~/assets/images/icon/icon_notion.png';

import projectSaasda from '~/assets/images/default/project_saasda.png'
import projectActesg from '~/assets/images/default/project_actesg.png'
import projectOpenprompt from '~/assets/images/default/project_openprompt.png'
import projectGamification from '~/assets/images/default/project_gamification.png'
import projectAirforce from '~/assets/images/default/project_airforce.png'
import projectKnda from '~/assets/images/default/project_knda.png'
import projectMobis from '~/assets/images/default/project_mobis.png'
import projectMetlife from '~/assets/images/default/project_metlife.png'
import projectHncareer from '~/assets/images/default/project_hncareer.png'
import projectHanabank from '~/assets/images/default/project_hanabank.png'
import projectHanati from '~/assets/images/default/project_hanati.png'
import projectPopgolf from '~/assets/images/default/project_popgolf.png'

// 2024.09.10[cgnoh]: 스킬 리스트
const skillList = ref([
  {
    name: 'HTML',
    url: iconHtml
  },
  {
    name: 'CSS',
    url: iconCss
  },
  {
    name: 'SCSS',
    url: iconScss
  },
  {
    name: 'JavaScript',
    url: iconJs
  },
  {
    name: 'Vue',
    url: iconVue
  },
  {
    name: 'Nuxt',
    url: iconNuxt
  },
  {
    name: 'Jquery',
    url: iconJquery
  },
  {
    name: 'Gulp',
    url: iconGulp
  },
  {
    name: 'Vite',
    url: iconVite
  },
  {
    name: 'React',
    url: iconReact
  }
]);

// 2024.09.10[cgnoh]: 툴 리스트
const toolList = ref([
  {
    name: 'PhotoShop',
    url: iconPhotoshop
  },
  {
    name: 'GitLab',
    url: iconGitlab
  },
  {
    name: 'GitHub',
    url: iconGithub
  },
  {
    name: 'Trello',
    url: iconTrello
  },
  {
    name: 'Redmine',
    url: iconRedmine
  },
  {
    name: 'Svn',
    url: iconSvn
  },
  {
    name: 'Figma',
    url: iconFigma
  },
  {
    name: 'Spread Sheet',
    url: iconSpreadsheet
  },
  {
    name: 'Notion',
    url: iconNotion
  }
]);

// 2024.09.10[cgnoh]: 프로젝트 리스트
const projectList = ref([
  {
    name: '타임교육 C&P 교육서비스의 게이미피케이션 활용에 관한 사전연구 수행사업',
    logo: projectGamification,
    index: 0
  },
  {
    name: '서비스형 소프트웨어(SaaS) 개발 및 육성 사업',
    title: projectSaasda,
    index: 1
  },
  {
    name: '하남교육재단 진로진학통합플랫폼 꿈노트 구축사업',
    logo: projectHncareer,
    index: 2
  },
  {
    name: '하나은행 디지털캠퍼스 평가시스템 구축사업',
    logo: projectHanabank,
    index: 3
  },
  {
    name: '공군교육사령부 공군 이러닝 무선기반체계 고도화 방안 연구 수행사업',
    logo: projectAirforce,
    index: 4
  },
  {
    name: '현대모비스 2024년 시스템 운영사업',
    logo: projectMobis,
    index: 5
  },
  {
    name: 'OpenPrompt 서비스 사업',
    title: projectOpenprompt,
    index: 6
  },
  {
    name: 'ACT! ESG 서비스 사업',
    title: projectActesg,
    index: 7
  },
  {
    name: '메트라이프 통합교육플랫폼 TIP 시스템 구축사업',
    logo: projectMetlife,
    index: 8
  },
  {
    name: '하나은행 디지털캠퍼스 고도화사업',
    logo: projectHanabank,
    index: 9
  },
  {
    name: '국립외교원 외교배움e 시스템 구축사업',
    logo: projectKnda,
    index: 10
  },
  {
    name: '하나금융티아이 DT UNIV 시스템 구축사업',
    logo: projectHanati,
    index: 11
  },
  {
    name: '팝골프 - 대규모 복합 골프 레저 파크 운영 사업',
    title: projectPopgolf,
    index: 12
  }
]);

// 2024.09.23[cgnoh]: 카드 플립 이벤트
const bannerImage = ref(false);
</script>

<style lang="scss" scoped>
@import '/assets/scss/pages/index.scss';
</style>