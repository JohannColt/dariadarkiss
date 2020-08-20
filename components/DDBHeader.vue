<template>
  <header class="ddb-header">
    <div class="ddb-header__mobile">
      <div class="ddb-header__container">
        <div class="ddb-header__burger">
          <button v-show="!isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img src="/images/ui-elements/burger-menu.svg" alt="burger-icon">
          </button>
          <button v-show="isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img src="/images/ui-elements/arrow.svg" alt="burger-icon">
          </button>
        </div>
        <div class="ddb-header__text">
          <a href="/" class="default-text">DARIADARKISS</a>
        </div>
        <div class="ddb-header__inst">
          <button class="ddb-header__menu-button">
            <a href="https://www.instagram.com/dariadarkiss" target="_blank">
              <img src="/images/ui-elements/instagram.svg" alt="insta-icon">
            </a>
          </button>
        </div>
      </div>
      <transition name="ddb-animation">
        <ddb-mobile-menu v-if="isActive"></ddb-mobile-menu>
      </transition>
      <div v-if="isActive" v-on:click="isActive=false" class="ddb-header__fade"></div>
    </div>
    <div class="ddb-header__desktop">
      <div class="ddb-header__desktop-container">
        <div class="ddb-header__logo">
          <a href="/" class="default-text">DARIADARKISS</a>
        </div>
        <div class="ddb-header__menu">
          <div class="ddb-header__desktop-elem">
            <ddb-button :is-active="true">
              <a href="/" class="default-text">Главная</a>
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button>
              Портфолио
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button>
              Цены
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button>
              Услуги
            </ddb-button>
          </div>
          <div class="ddb-header__desktop-elem">
            <ddb-button>
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
      'ddb-button': DDBButton},
    data() {
      return {
        isActive: false
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
    z-index: 2;
    &__desktop {
      display: none;
    }
    &__container {
      position: relative;
      z-index: 3;
    }
    &__desktop-container {
      padding-left: 40px;
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
    backdrop-filter: blur(10px);

  }

  .ddb-header__text {
    color: $primary-color1;
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
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparentize($primary-color2, 0.6);
    backdrop-filter: blur(10px);
  }

  .ddb-header__desktop-elem {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
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

  @include for-extra-large() {
    .ddb-header {
      z-index: 2;
      &__mobile {
        display: none;
      }
      &__desktop {
        display: block;
      }
    }
  }

</style>
