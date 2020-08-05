<template>
  <header class="ddb-header">
    <div class="ddb-header__mobile">
      <div class="ddb-header__container">
        <div class="ddb-header__burger">
          <button v-if="!isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img src="/ui-elements/burger-menu.svg" alt="burger-icon">
          </button>
          <button v-if="isActive" v-on:click="isActive=!isActive" class="ddb-header__menu-button">
            <img src="ui-elements/arrow.svg" alt="burger-icon">
          </button>
        </div>
        <div class="ddb-header__text">
          <h2 class="ddb-header__text__htext">DARIADARKISS</h2>
        </div>
        <div class="ddb-header__inst">
          <button class="ddb-header__menu-button">
            <img src="/ui-elements/instagram.svg" alt="insta-icon">
          </button>
        </div>
      </div>
      <transition name="ddb-animation">
        <header-menu v-if="isActive"></header-menu>
      </transition>
      <div v-if="isActive" v-on:click="isActive=false" class="ddb-header__hidden__field"></div>
    </div>
    <div class="ddb-header__desktop">
      <div class="ddb-header__desktop__container">
        <div class="ddb-header__desktop__elem ddb-header__desktop__dd">
          <h2 class="ddb-header__desktop__text">DARIADARKISS</h2>
        </div>

        <div class="ddb-header__desktop__elem ddb-header__desktop__oe">
          <button class="ddb-header__menu-button">
            <h4 class="ddb-header__desktop__text ">Главная</h4>
          </button>
          <img src="/ui-elements/anchor.png" class="ddb-header__desktop__anchor" alt="anchor-icon">
        </div>
        <div class="ddb-header__desktop__elem ddb-header__desktop__oe">
          <button class="ddb-header__menu-button">
            <h4 class="ddb-header__desktop__text ">Портфолио</h4>
          </button>
        </div>
        <div class="ddb-header__desktop__elem ddb-header__desktop__oe">
          <button class="ddb-header__menu-button">
            <h4 class="ddb-header__desktop__text ">Цены</h4>
          </button>
        </div>
        <div class="ddb-header__desktop__elem ddb-header__desktop__oe">
          <button class="ddb-header__menu-button">
            <h4 class="ddb-header__desktop__text ">Услуги</h4>
          </button>
        </div>
        <div class="ddb-header__desktop__elem ddb-header__desktop__oe">
          <button class="ddb-header__menu-button">
            <h4 class="ddb-header__desktop__text ">Контакты</h4>
          </button>
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
  }

  .ddb-header__container {
    &__burger {
      img {
        height: 24px;
      }
    }

    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $primary-color2;
    border-bottom: 1px solid $primary-color1;

  }

  .ddb-header__burger {
    padding-left: 10px;
  }

  .ddb-header__inst {
    padding-right: 10px;
  }

  .ddb-header__text {
    color: $primary-color1;
  }

  .ddb-header__menu-button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer
  }

  .ddb-header__text__htext {
    height: 28px;
  }

  .ddb-header__hidden__field {
    min-height: 100vh;
    opacity: 0;
  }

  .ddb-header__desktop__container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $primary-color2;
    border-bottom: 1px solid $primary-color1;

  }

  .ddb-header__desktop__dd {
    width: 50%;
    margin-left: 40px;
  }

  .ddb-header__desktop__oe {
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

  .header-menu {
    animation: ddb-animation;
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

  @media (min-width: 800px) {
    .ddb-header__mobile {
      display: none;
    }

  }

  @media (max-width: 799px) {
    .ddb-header__desktop {
      display: none;
    }
  }

</style>
