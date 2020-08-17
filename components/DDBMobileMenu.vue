<template>
  <div class="ddb-header__menu">
    <div class="ddb-header__menu__elem">
      Портфолио
    </div>
    <div class="ddb-header__menu__elem">
      Цены
    </div>
    <div class="ddb-header__menu__elem">
      Услуги
    </div>
    <div class="ddb-header__menu__elem">
      Контакты
    </div>
  </div>
</template>

<script>
  export default {
    name: "ddb-mobile-menu"
  }
</script>

<style lang="scss" scoped>
  .ddb-header__menu {
    position: absolute;
    width: 100%;
    z-index: 2;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparentize($primary-color2, 0.6);
    backdrop-filter: blur(10px);
  }

  .ddb-header__menu__elem {
    text-align: center;
    color: $primary-color1;
    line-height: 32px;
    padding: 12px;
    font-weight: $font-weight-semi-bold;
    text-transform: uppercase;
    &:first-child {
      padding-top: 24px;
    }
    &:last-child {
      padding-bottom: 32px;
    }
  }

  .ddb-header__menu__text {
  }
</style>
