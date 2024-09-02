# Nuxt 3 Default Setting

###개요
>nuxt.js 프로젝트로 세팅의 편의성을 위해 제작된 가이드 프로젝트


###디렉토리
> 가장 기본적인 디렉토리 구조와 필수 파일
<details>
<summary>내용보기</summary>

```bash
├──📁assets #자원 데이터
│   ├──📁images #이미지
│   │   ├──📁bg       #배경
│   │   ├──📁default  #기본(로고등 bg, icon에 속하지 않는 데코이미지)
│   │   ├──📁icon     #아이콘
│   │   ├──📁mobile   #모바일 전용
│   │   └──📁sample   #더미 데이터 생성시 필요한 샘플(ex.썸네일)
│   ├──📁js #프론트에 필요한 js (ex.lottie)
│   ├──📁scss
│   │   ├──📁base #공통사용 scss(기본세팅)
│   │   │   ├──📄animation.scss  #keyframes, transition 등
│   │   │   ├──📄common.scss     #공통요소(ex. input, button 등)
│   │   │   ├──📄iconfont.scss   #아이콘폰트
│   │   │   ├──📄layout.scss     #전체그리드와 메뉴
│   │   │   ├──📄reset.scss      #기본 reset과 root 변수
│   │   │   └──📄variables.scss  #mixin과 scss 변수
│   │   ├──📁components #해당 컴포넌트에서만 사용되는 scss
│   │   └──📁pages #해당 페이지에서만 사용되는 scss
├──📁components 
│   ├──📁common   #공통 사용되는 컴포넌트
│   ├──📁layout   #레이아웃 구조에 사용되는 컴포넌트
│   │   ├──📄footer.vue
│   │   └──📄header.vue
│   └──📁page     #해당페이지에서만 사용되는 컴포넌트
├──📁layouts #NuxtLayout
│   └──📄default.vue  #기본레이아웃
├──📁pages #NuxtPage
├──📁plugins #전역사용 함수, 라이브러리, 서비스 등
├──📁public #정적 파일
│   ├──📁fonts        #폰트파일
│   ├──📄favicon.ico  #파비콘
│   └──📄ogImg.png    #오픈그래프 이미지
├──📁server #서버 측 코드와 설정
│   └──📁middleware
├──📄app.vue            #모든 페이지의 기본 틀
├──📄nuxt.config.ts     #Nuxt.js 설정 파일
├──📄package.json       #프로젝트의 메타데이터 및 의존성 관리
├──📄package-lock.json  #프로젝트의 의존성 트리를 포함한 패키지의 정확한 버전을 기록
├──📄README.md
└──📄tsconfig.json      #TypeScript 프로젝트의 설정


```
</details>

###주 사용 라이브러리
>진행 되었던 프로젝트들을 기준으로 한 라이브러리 목록
<details>
<summary>내용보기</summary>

###devDependencies
<table>
<thead>
<tr>
<th>용도</th>
<th>package명</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">saas 컴파일러</td>
<td>saas</td>
</tr>
<tr>
<td>sass-loader</td>
</tr>
<tr>
<td>프로젝트 폰트 설정</td>
<td>nuxt-font-loader</td>
</tr>
</tbody>
</table>

###dependencies
<table>
<thead>
<tr>
<th>용도</th>
<th>라이브러리명</th>
<th>package명</th>
<th>링크</th>
<th>비고</th>
</tr>
</thead>
<tbody>
<tr>
<th>슬라이더</th>
<td>swiper.js</td>
<td>swiper</td>
<td><a href="https://swiperjs.com/">바로가기</a></td>
<td>-</td>
</tr>

<tr>
<th>차트</th>
<td>chart.js</td>
<td>chart.js</td>
<td><a href="https://www.chartjs.org/">바로가기</a></td>
<td>옵션 라이브러리 추가 필요</td>
</tr>

<tr>
<th>날짜 및 시간</th>
<td>dayjs</td>
<td>dayjs-nuxt</td>
<td><a href="https://nuxt.com/modules/dayjs">바로가기</a></td>
<td>-</td>
</tr>

<tr>
<th>그리드</th>
<td>toast grid</td>
<td>tui-grid</td>
<td><a href="https://ui.toast.com/tui-grid">바로가기</a></td>
<td>-</td>
</tr>

<tr>
<th>에디터</th>
<td>toast editor</td>
<td>@toast-ui/editor</td>
<td><a href="https://ui.toast.com/tui-editor">바로가기</a></td>
<td>-</td>
</tr>

<tr>
<th>영상</th>
<td>video.js</td>
<td>video.js</td>
<td><a href="https://videojs.com/">바로가기</a></td>
<td>옵션 라이브러리 추가 필요</td>
</tr>

<tr>
<th>순서변경</th>
<td>vuedraggable</td>
<td>vuedraggable</td>
<td><a href="https://sortablejs.github.io/Vue.Draggable/#/simple">바로가기</a></td>
<td>-</td>
</tr>

<tr>
<th>파일드래그드롭</th>
<td>useDropZone</td>
<td>@vueuse/nuxt</td>
<td><a href="https://vueuse.org/core/useDropZone/">바로가기</a></td>
<td>vueuse의 elements</td>
</tr>

<tr>
<th>데이트피커</th>
<td>vue datepicker</td>
<td>@vuepic/vue-datepicker</td>
<td><a href="https://vue3datepicker.com/props/modes">바로가기</a></td>
<td>-</td>
</tr>
</tbody>
</table>
</details>