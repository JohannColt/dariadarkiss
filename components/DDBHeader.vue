<template>
  <header class="ddb-header">
    <div class="ddb-header__burger">
      <img src="/ui-elements/burger-menu.svg" alt="burger-icon">
    </div>
  </header>
</template>

<script>
    export default {
        name: "ddb-header"
    }
</script>

<style lang="scss" scoped>
  .ddb-header {
    padding: 0 40px;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    background: rgba(244, 240, 238, 0.6);
    &__burger {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
</style>
