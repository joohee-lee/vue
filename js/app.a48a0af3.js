(function(){"use strict";var e={3382:function(e,a,t){var n=t(5130),o=t(6768);const i={id:"app"},l={class:"section section1"};function r(e,a,t,n,r,c){const d=(0,o.g2)("AboutMe"),s=(0,o.g2)("full-page");return(0,o.uX)(),(0,o.CE)("div",i,[a[4]||(a[4]=(0,o.Fv)('<header data-v-4f10bfd9><div class="header-inner" data-v-4f10bfd9><ul class="nav-menu" id="menu" data-v-4f10bfd9><li data-menuanchor="page1" class="active" data-v-4f10bfd9><a href="#page1" data-v-4f10bfd9>About</a></li><li data-menuanchor="page2" data-v-4f10bfd9><a href="#page2" data-v-4f10bfd9>PortPolio</a></li><li data-menuanchor="page3" data-v-4f10bfd9><a href="#page3" data-v-4f10bfd9>Likes</a></li><li data-menuanchor="page4" data-v-4f10bfd9><a href="#page4" data-v-4f10bfd9>Gallery</a></li></ul></div></header>',1)),(0,o.bF)(s,{options:r.options,id:"fullpage",ref:"fullpage"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",l,[a[0]||(a[0]=(0,o.Lk)("h1",null,"1",-1)),(0,o.bF)(d)]),a[1]||(a[1]=(0,o.Lk)("div",{class:"section section2"},[(0,o.Lk)("h1",{class:"type02"},"2"),(0,o.Lk)("div",{class:"slide"},[(0,o.Lk)("h3",null,"Slide 2.1")]),(0,o.Lk)("div",{class:"slide"},[(0,o.Lk)("h3",null,"Slide 2.2")]),(0,o.Lk)("div",{class:"slide"},[(0,o.Lk)("h3",null,"Slide 2.3")])],-1)),a[2]||(a[2]=(0,o.Lk)("div",{class:"section section3"},[(0,o.Lk)("h1",null,"3"),(0,o.Lk)("h3",null,"Section 3")],-1)),a[3]||(a[3]=(0,o.Lk)("div",{class:"section section4"},[(0,o.Lk)("h1",null,"4"),(0,o.Lk)("h3",null,"Section 4")],-1))])),_:1},8,["options"])])}t(4114);const c={class:"section-about"};function d(e,a){return(0,o.uX)(),(0,o.CE)("section",c,a[0]||(a[0]=[(0,o.Fv)('<div class="container" data-v-43ec0d22><div class="cards" data-v-43ec0d22><div class="card-box card-box--01" data-v-43ec0d22><div class="inner" data-v-43ec0d22><h2 data-v-43ec0d22>LEE JOO HEE</h2><ul data-v-43ec0d22><li data-v-43ec0d22>UI Developer(Web Publisher)</li><li data-v-43ec0d22>joohee-lee.github@gmail.com</li></ul><h2 data-v-43ec0d22>SKILL</h2><ul data-v-43ec0d22><li data-v-43ec0d22>HTMl5/CSS/SASS(SCSS)</li><li data-v-43ec0d22>웹표준,웹접근성(Wai-Aria),크로스브라우징</li><li data-v-43ec0d22>자바스크립트, 라이브러리 이해</li><li data-v-43ec0d22>React(JSX) 환경 화면 담당</li><li data-v-43ec0d22>React,Vue 환경 컴포넌트 마크업 개발</li></ul></div></div><div class="card-box card-box--02" data-v-43ec0d22><img src="https://joohee-lee.github.io/img/joohee.png" data-v-43ec0d22></div></div></div>',1)]))}var s=t(1241);const u={},f=(0,s.A)(u,[["render",d],["__scopeId","data-v-43ec0d22"]]);var v=f,p={name:"App",components:{AboutMe:v},data(){return{options:{licenseKey:"YOUR_KEY_HERE",afterLoad:this.afterLoad,scrollOverflow:!0,scrollBar:!1,menu:"#menu",navigation:!0,anchors:["page1","page2","page3","page4"],sectionsColor:["","#000","#f7f7f7","#fb8024","#1bcee6","#ee1a59","#2c3e4f","#ba5be9","#b4b8ab"]}}},methods:{afterLoad(){console.log("After load")},addSection(e){e.preventDefault();var a=document.querySelectorAll(".fp-section").length+1,t=document.createElement("div");t.className="section",t.innerHTML=`<h3>Section ${a}</h3>`,document.querySelector("#fullpage").appendChild(t);var n=document.createElement("li");n.setAttribute("data-menuanchor","page"+a),n.innerHTML=`<a href="#page${a}">Section${a}</a>`;var o=document.querySelector("#menu");o.appendChild(n),this.options.anchors.push(`page${a}`),this.$refs.fullpage.build()},removeSection(){var e=document.querySelector("#fullpage").querySelectorAll(".fp-section"),a=e[e.length-1];a.parentNode.removeChild(a),this.options.anchors.pop();var t=document.querySelectorAll("#menu li"),n=t[t.length-1];n.parentNode.removeChild(n)},toggleNavigation(){this.options.navigation=!this.options.navigation},toggleScrollbar(){console.log("Changing scrollbar..."),this.options.scrollBar=!this.options.scrollBar}}};const h=(0,s.A)(p,[["render",r],["__scopeId","data-v-4f10bfd9"]]);var g=h,b=t(9e3);const m=(0,n.Ef)(g);m.use(b.A),m.mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,i){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],i=e[s][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(r=!1,i<l&&(l=i));if(r){e.splice(s--,1);var d=o();void 0!==d&&(a=d)}}return a}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,i,l=n[0],r=n[1],c=n[2],d=0;if(l.some((function(a){return 0!==e[a]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(c)var s=c(t)}for(a&&a(n);d<l.length;d++)i=l[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},n=self["webpackChunkfullpage_portfolio"]=self["webpackChunkfullpage_portfolio"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3382)}));n=t.O(n)})();
//# sourceMappingURL=app.a48a0af3.js.map