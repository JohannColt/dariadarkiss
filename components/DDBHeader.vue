<template>
  <header  class="ddb-header">
    <div class="ddb-header__mobile" v-bind:class=themeClassMobile>
      <div class="ddb-header__container" v-bind:class="{
        'ddb-header__container__white':!themeNumber,'ddb-header__container__black':themeNumber}">
        <div class="ddb-header__burger">
          <button v-show="!isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img v-if="!themeNumber" src="/images/ui-elements/burger-menu.svg" alt="burger-icon">
            <img v-if="themeNumber" src="/images/ui-elements/FrameWhite.png" alt="burger-icon">
          </button>
          <button v-show="isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img v-if="!themeNumber" src="/images/ui-elements/arrow.svg" alt="burger-icon">
            <img v-if="themeNumber" src="/images/ui-elements/arrowWhite.png" alt="burger-icon">
          </button>
        </div>
        <div class="ddb-header__text">
          <a href="/" v-bind:class=themeClassText>DARIADARKISS</a>
        </div>
        <div class="ddb-header__inst">
          <button class="ddb-header__menu-button">
            <a href="https://www.instagram.com/dariadarkiss" target="_blank">
              <img v-if="!themeNumber" src="/images/ui-elements/instagram.svg" alt="insta-icon">
              <img width="24px" height="24px" v-if="themeNumber" src="/images/ui-elements/instagram-white.png" alt="insta-icon">
            </a>
          </button>
        </div>
      </div>
      <transition name="ddb-animation">
        <ddb-mobile-menu @click="isActive= false" v-if="isActive"></ddb-mobile-menu>
      </transition>
      <div v-if="isActive" v-on:click="isActive=false" class="ddb-header__fade"></div>
    </div>
    <div class="ddb-header__desktop" v-bind:class=themeClass>
      <div class="ddb-header__desktop-container container">
        <div class="ddb-header__logo">
          <a href="/" v-bind:class=themeClassText>DARIADARKISS</a>
        </div>
        <div class="ddb-header__menu">
          <div class="ddb-header__desktop-elem">
            <ddb-button v-on:click="isClickedInBlack" :is-active="true">
              <NuxtLink v-bind:class=themeClassText to="/">Главная</NuxtLink>
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button v-on:click="isClickedInBlack">
              <NuxtLink v-bind:class=themeClassText to="/portfolio">Портфолио</NuxtLink>
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button v-on:click="isClickedInBlack" v-bind:class=themeClassText @click="isClickedPrice">
              Цены
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button v-on:click="isClickedInBlack" v-bind:class=themeClassText @click="isClickedPop">
              Услуги
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button v-on:click="isClickedInBlack" v-bind:class=themeClassText @click="isClickedSend">
              Контакты
            </ddb-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import DDBMobileMenu from "./DDBMobileMenu";
import DDBButton from "@/components/DDBButton";

export default {
  name: "ddb-header",
  components: {
    'ddb-mobile-menu': DDBMobileMenu,
    'ddb-button': DDBButton
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    themeClass() {
      if (this.themeNumber === 0){

        return "ddb-header__desktop__white"
      }
      if (this.themeNumber === 1){
        return "ddb-header__desktop__black"
      }
    },
    themeClassMobile() {
      if (this.themeNumber === 0){
        return "ddb-header__mobile__white"
      }
      if (this.themeNumber === 1){
        return "ddb-header__mobile__black"
      }
    },
    themeClassText() {
      if (this.themeNumber === 0){
        return "default-text"
      }
      if (this.themeNumber === 1){
        return "default-text-on-black"
      }
    },
    themeNumber() {
      return this.$store.state.headerState
    }
  },
  methods: {
    isClickedPrice() {
      this.$store.commit('changeToOneBlock')
      if (this.$store.state.pageCounter === 0) {
        const a = document.getElementById('ddb-price')
        a.scrollIntoView({behavior: "smooth"});
      }
      else this.$router.push('/');
    },
    isClickedPop() {
      this.$store.commit('changeToTwoBlock')
      if (this.$store.state.pageCounter === 0) {
        const b = document.getElementById('ddb-popular')
        b.scrollIntoView({behavior: "smooth"});
      }
      else this.$router.push('/');
    },
    isClickedSend() {
      this.$store.commit('changeToThreeBlock')
      if (this.$store.state.pageCounter === 0) {
        const c = document.getElementById('ddb-send-to-me')
        c.scrollIntoView({behavior: "smooth"});
      }
      else this.$router.push('/');
    },
    isClickedInBlack(){
        this.$store.commit('changeToZeroHeader')
    }
  }
}
</script>

<style lang="scss" scoped>

.ddb-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 500;

  &__desktop {
    justify-content: center;
    background-color: transparentize($primary-color2, 0.6);
    backdrop-filter: blur(10px);
    display: none;
    &__black{
      background-color: #3F2D2D;
      color: #F0ECEC;
    }
  }
  &__mobile {
    &__black{
      background-color: #3F2D2D;
      color: #F0ECEC;
    }
  }
  &__container {
    position: relative;
    z-index: 501;
  }
  &__menu {
    display: flex;
  }

  &__logo {
    font-weight: $font-weight-bold;
    font-size: 1.3em;
  }
}
.ddb-header__container {
  &__burger {
    img {
      height: 24px;
    }
  }

  padding: 0 22px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparentize($primary-color2, 0.6);
  backdrop-filter: blur(8px);
  &__black{
    background-color: #3F2D2D;
    color: #F0ECEC;
  }
}

.ddb-header__text {
  font-weight: $font-weight-semi-bold;
}

.ddb-header__menu-button {
  display: flex;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.ddb-header__text__htext {
  height: 28px;
  font-size: 1em;
  line-height: 1em;
}

.ddb-header__fade {
  position: absolute;
  min-height: 100vh;
  width: 100%;
  opacity: 1;
}

.ddb-header__desktop-container {
  height: $header-height-desktop;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ddb-header__desktop-elem {
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
}

.ddb-header__desktop-anchor {
  width: 60%;
}

@keyframes ddb-animation {
  0% {
    transform: translateY(-264px);
  }
  100% {
    transform: translateY(0);
  }
}

.ddb-animation-enter-active {
  animation: ddb-animation 0.3s;
}

.ddb-animation-leave-active {
  animation: ddb-animation 0.3s reverse;
}

@include for-large {
  .ddb-header {
    z-index: 500;

    &__mobile {
      display: none;
    }

    &__desktop {
      display: flex;
    }
  }
}
</style>
