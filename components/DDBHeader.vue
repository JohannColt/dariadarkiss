<template>
  <header class="ddb-header">
    <div class="ddb-header__mobile">
      <div class="ddb-header__container">
        <div class="ddb-header__burger">
          <button v-if="!isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img src="/images/ui-elements/burger-menu.svg" alt="burger-icon">
          </button>
          <button v-if="isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img src="/images/ui-elements/arrow.svg" alt="burger-icon">
          </button>
        </div>
        <div class="ddb-header__text">
          <a href="/" class="default-text">DARIADARKISS</a>
        </div>
        <div class="ddb-header__inst">
          <button class="ddb-header__menu-button">
            <img src="/images/ui-elements/instagram.svg" alt="insta-icon">
          </button>
        </div>
      </div>
      <transition name="ddb-animation">
        <header-menu v-if="isActive"></header-menu>
      </transition>
      <div v-if="isActive" v-on:click="isActive=false" class="ddb-header__hidden__field"></div>
    </div>
    <div class="ddb-header__desktop">
      <div class="ddb-header__desktop-container">
        <div class="ddb-header__logo">
          <a href="/" class="default-text">DARIADARKISS</a>
        </div>
        <div class="ddb-header__menu">
          <div class="ddb-header__desktop-elem">
            <button class="ddb-header__menu-button">
              <a href="/" class="default-text">Главная</a>
            </button>
            <img src="/images/ui-elements/anchor.png" class="ddb-header__desktop__anchor" alt="anchor-icon">
          </div>
          <div class="ddb-header__desktop-elem">
            <button class="ddb-header__menu-button">
              Портфолио
            </button>
          </div>
          <div class="ddb-header__desktop-elem">
            <button class="ddb-header__menu-button">
              Цены
            </button>
          </div>
          <div class="ddb-header__desktop-elem">
            <button class="ddb-header__menu-button">
              Услуги
            </button>
          </div>
          <div class="ddb-header__desktop-elem">
            <button class="ddb-header__menu-button">
              Контакты
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import HeaderMenu from "./DDBMobileMenu";

  export default {
    name: "ddb-header",
    components: {HeaderMenu},
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
    opacity: 0.9;
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
    background-color: $primary-color2;

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

  .ddb-header__hidden__field {
    position: absolute;
    min-height: 100vh;
    opacity: 1;
  }

  .ddb-header__desktop-container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $primary-color2;
  }

  .ddb-header__desktop-elem {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
  }

  .ddb-header__desktop__anchor {
    width: 60%;
  }

  .ddb-header__desktop__text {
    margin: 0;
  }

  @keyframes ddb-animation {
    0% {
      transform: translateY(-312px);
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

  @include for-desktop-up() {
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
