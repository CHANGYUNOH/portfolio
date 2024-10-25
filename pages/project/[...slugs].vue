<template>
  <div class="container">
    <div class="row">
      <template v-if="slugs == 0">
        <div class="row-inner gamification">
          <nuxt-link to="https://game.wbsoft.kr/gate" target="_blank" class="thumb">
            <img src="/assets/images/default/project_gamification.png" alt="타임교육 C&P 교육서비스의 게이미피케이션 활용에 관한 사전연구 수행사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 타임교육 C&P 교육서비스의 게이미피케이션 활용에 관한 사전연구 수행사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2024.06 ~ 2024.08(3개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">기본 프로젝트 세팅 및 가이드 작성으로 개발 작업 진척도 향상</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">사용자 대시보드 페이지 작업, api호출로 데이터 연동</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Nuxt.js, Sass, Swiper.js, Toast UI, Datepicker</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 1">
        <div class="row-inner full">
          <nuxt-link to="https://www.saasda.co.kr" target="_blank" class="thumb">
            <div class="thumb-img" :style="{backgroundImage: `url(${projectSaasda})`}" />
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 서비스형 소프트웨어(SaaS) 개발 및 육성 사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2023.07 ~ 2024.08(11개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">학습패턴 시각화, 실시간 목표 달성 현황 등 개인의 성취를 한눈에 보여주는 맞춤형 대시보드 작성, 강의 영상 시청부터 학습메모, 강의자료, 시험, 과제, 설문까지 학습에 필요한 모든 기능을 아우르는 학습플레이어 작업</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">video.js로 학습 플레이어 커스텀 개발, chart.js로 학습 차트 개발, swiper.js로 카드 리스트 구성, 대시보드 구성</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Nuxt.js, Video.js, Chart.js, Swiper.js</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 2">
        <div class="row-inner hdream">
          <nuxt-link to="https://www.hdream.or.kr" target="_blank" class="thumb">
            <img src="/assets/images/default/project_hncareer.png" alt="하남교육재단 진로진학통합플랫폼 꿈노트 구축사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 하남교육재단 진로진학통합플랫폼 꿈노트 구축사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐기간:</span><span class="content">2023.10 ~ 2024.08(11개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">미리보기 팝업이 모달에서 새 창 팝업으로 변경, 차트 커스텀 및 수정</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">학습자 리스트, 상세 페이지 및 관리자 페이지 및 미리보기 팝업 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Nuxt.js, Sass, Swiper.js, Chart.js, Toast UI</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 3">
        <div class="row-inner hanabank">
          <nuxt-link to="https://campus.hanabank.com:18443/main.do" target="_blank" class="thumb">
            <img src="/assets/images/default/project_hanabank.png" alt="하나은행 디지털캠퍼스 평가시스템 구축사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 하나은행 디지털캠퍼스 평가시스템 구축사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2024.02 ~ 2024.03(3개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">영문화 작업으로 개발 작업시간 단축</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">내부망 구축 시스템으로 평가 화면(리스트, 상세, 팝업 등) 퍼블리싱 작업, ES6문법으로 마이그레이션, 크로스 브라우징 작업(IE적용)</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Html, CSS, Jquery, Javascript, JSP</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 4">
        <div class="row-inner airforce">
          <nuxt-link to="https://af.wbsoft.kr" target="_blank" class="thumb">
            <img src="/assets/images/default/project_airforce.png" alt="공군교육사령부 공군 이러닝 무선기반체계 고도화 방안 연구 수행사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 공군교육사령부 공군 이러닝 무선기반체계 고도화 방안 연구 수행사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2023.07 ~ 2023.12(6개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">공군교육사령부 ‘공군학습포털’ 구축,  Vue2 → Vue3로 마이그레이션</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">메인/서브 페이지 퍼블리싱 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Vue3, Chart.js, Swiper.js, Fullcalendar, Video.js</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 5">
        <div class="row-inner mobis">
          <div class="thumb">
            <img src="/assets/images/default/project_mobis.png" alt="현대모비스 2024년 시스템 운영사업">
          </div>
          <div class="content">
            <p class="title">프로젝트명: 현대모비스 2024년 시스템 운영사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2023.01 ~ 2023.12(1년)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">현대모비스 모비스쿨, 오픈플랫폼 등 구축</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">메뉴 구성 및 프로그레스 동작, 카테고리 모달 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Vue.js, Vite, Sass, Swiper.js, Toast UI</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 6">
        <div class="row-inner full">
          <nuxt-link to="https://www.prpt.ai" target="_blank" class="thumb">
            <div class="thumb-img" :style="{backgroundImage: `url(${projectOpenprompt})`}" />
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: OpenPrompt 서비스 사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2022.12 ~ 2023.08(9개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">프롬프트 라이브러리 사이트 구축</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">리스트, 상세, 쓰기 페이지 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Nuxt.js, Sass, Toast UI, Swiper.js</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 7">
        <div class="row-inner full">
          <nuxt-link to="https://www.actesg.kr" target="_blank" class="thumb">
            <div class="thumb-img" :style="{backgroundImage: `url(${projectActesg})`}" />
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: ACT! ESG 서비스 사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2022.12 ~ 2023.08(9개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">ESG 서비스 론칭</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">체크박스, 탭, 라벨, 팝업, 배너 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Nuxt.js, Sass, Toast UI, Swiper.js</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 8">
        <div class="row-inner metlife">
          <nuxt-link to="https://tip.metlife.co.kr" target="_blank" class="thumb full">
            <img src="/assets/images/default/project_metlife.png" alt="메트라이프 통합교육플랫폼 TIP 시스템 구축사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 메트라이프 통합교육플랫폼 TIP 시스템 구축사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2022.03 ~ 2023.03(1년)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">메트라이프 통합교육플랫폼 ‘TIP’ 구축</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">애자일 기법 프로세스로 의사소통 경험, Vue.js 프레임워크 도입 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Vue.js, Chart.js, Video.js, Fontagon, Swiper.js</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 9">
        <div class="row-inner">
          <nuxt-link to="https://campus.hanabank.com:18443/main.do" target="_blank" class="thumb">
            <img src="/assets/images/default/project_hanabank.png" alt="하나은행 디지털캠퍼스 고도화사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 하나은행 디지털캠퍼스 고도화사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2022.01 ~ 2023.04(4개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">ES5 → ES6 마이그레이션</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">크로스 브라우징 작업(IE)</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Html, CSS, Jquery, Javascript, JSP</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 10">
        <div class="row-inner knda">
          <nuxt-link to="https://edu.mofa.go.kr/gate.do" target="_blank" class="thumb">
            <img src="/assets/images/default/project_knda.png" alt="국립외교원 외교배움e 시스템 구축사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 국립외교원 외교배움e 시스템 구축사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2021.09 ~  2022.06(10개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">외교부 국립외교원 ‘외교배움e’ 구축</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">웹유지보수 및 하자보수 작업, 고도화 작업(화면 디자인 변경으로 인한 웹 리뉴얼), 웹접근성, 웹표전 작업</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Html, CSS, Javascript, Gulp</span></li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else-if="slugs == 11">
        <div class="row-inner">
          <nuxt-link to="https://dtu.hanafn.com" target="dtu.hanafn.com" class="thumb">
            <img src="/assets/images/default/project_hanati.png" alt="하나금융티아이 DT UNIV 시스템 구축사업">
          </nuxt-link>
          <div class="content">
            <p class="title">프로젝트명: 하나금융티아이 DT UNIV 시스템 구축사업</p>
            <ul class="desc">
              <li class="desc-list"><span class="tit">🕐 기간:</span><span class="content">2021.08 ~ 2022.03(8개월)</span></li>
              <li class="desc-list"><span class="tit">🚀 성과:</span><span class="content">하나금융티아이 DT UNIV 시스템 구축</span></li>
              <li class="desc-list"><span class="tit">📌 역할:</span><span class="content">프로젝트 유지보수 작업(학습자, 관리자)</span></li>
              <li class="desc-list"><span class="tit">🔨 기술:</span><span class="content">Html, CSS, Javascript, Gulp</span></li>
            </ul>
          </div>
        </div>
      </template>
      <div class="btn-wrap">
        <button type="button" class="btn-default" @click="router.go(-1)">뒤로가기</button>
        <button type="button" class="btn-default point is-right" @click="goToNext">다음으로</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import projectSaasda from '~/assets/images/default/project_saasda.png'
import projectOpenprompt from '~/assets/images/default/project_openprompt.png'
import projectActesg from '~/assets/images/default/project_actesg.png'

const route = useRoute();
const router = useRouter();
const slugs = route.params.slugs;

// 2024.09.23[cgnoh]: 다음으로 클릭 이벤트
const goToNext = () => {
  router.push(`/project/${slugs}`);

  // 현재 경로에서 마지막 숫자 부분을 추출
  const currentPath = route.path;
  const currentId = parseInt(currentPath.split('/').pop());

  // 숫자를 1 증가시켜 새로운 경로로 이동
  // 숫자가 12를 넘어가면 다시 0으로, 그렇지 않으면 +1
  const nextId = currentId >= 11 ? 0 : currentId + 1;
  router.push(`/project/${nextId}`);
}

definePageMeta({
  layout: 'default',
});
</script>
<style lang="scss" scoped>
@import '/assets/scss/pages/project.scss';
</style>