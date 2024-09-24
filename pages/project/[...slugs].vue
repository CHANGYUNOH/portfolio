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
            <div class="desc">
              <p>🕐 기간: 2024.06 ~ 2024.08(3개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: Api호출로 데이터 연동</p>
              <p>🔨 기술: Nuxt.js</p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2023.07 ~ 2024.08(11개월)</p>
              <p>🚀 성과: 처음으로 자체 서비스를 개발 및 구축</p>
              <p>📌 역할: 대시보드 구성, 영상 플레이어 커스텀, 학습 차트 개발, 스와이퍼로 카드 리스트 구성</p>
              <p>🔨 기술: Nuxt.js, video.js, chart.js, swiper.js</p>
            </div>
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
            <div class="desc">
              <p>🕐기간: 2023.10 ~ 2024.08(11개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: Nuxt.js로 프로젝트 경험</p>
              <p>🔨 기술: Nuxt.js</p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2024.02 ~ 2024.03(3개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: 내부망 구축 시스템 프로젝트</p>
              <p>🔨 기술: </p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2023.07 ~ 2023.12(6개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: Vue3로 작업</p>
              <p>🔨 기술: </p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2023.01 ~ 2023.12(1년)</p>
              <p>🚀 성과: </p>
              <p>📌 역할:</p>
              <p>🔨 기술: eclipse</p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2022.12 ~ 2023.08(9개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: </p>
              <p>🔨 기술: Nuxt.js</p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2022.12 ~ 2023.08(9개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: </p>
              <p>🔨 기술: Nuxt.js</p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2022.03 ~ 2023.03(1년)</p>
              <p>🚀 성과: 처음으로 새로운 프레임워크 도입</p>
              <p>📌 역할: 애자일 기법으로 운영했던 프로세스 경험</p>
              <p>🔨 기술: Vue.js</p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2022.01 ~ 2023.04(4개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: 이미 구축된 사이트에서 마이그레이션 작업, 크로스 브라우징 작업</p>
              <p>🔨 기술: </p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2021.09 ~  2022.06(10개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: 웹접근성, 웹표준 작업, 고도화 작업(화면 디자인 변경으로 인한 웹 리뉴얼), 유지보수 및 하자보수 작업</p>
              <p>🔨 기술: </p>
            </div>
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
            <div class="desc">
              <p>🕐 기간: 2021.08 ~ 2022.03(8개월)</p>
              <p>🚀 성과: </p>
              <p>📌 역할: gulp를 통한 빌드시스템 경험</p>
              <p>🔨 기술: </p>
            </div>
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