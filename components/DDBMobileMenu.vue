<template>
  <div class="ddb-header__menu">
    <div class="ddb-header__menu__elem">
      <h2 class="ddb-header__menu__text">ПОРТФОЛИО</h2>
    </div>
    <div class="ddb-header__menu__elem">
      <h2 class="ddb-header__menu__text">ЦЕНЫ</h2>
    </div>
    <div class="ddb-header__menu__elem">
      <h2 class="ddb-header__menu__text">УСЛУГИ</h2>
    </div>
    <div class="ddb-header__menu__elem">
      <h2 class="ddb-header__menu__text">КОНТАКТЫ</h2>
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
    height: 312px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary-color2;
  }

  .ddb-header__menu__elem {
    text-align: center;
    color: $primary-color1;
  }

  .ddb-header__menu__text {
    height: 28px;
  }
</style>
