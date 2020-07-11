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
    &__burger {
      img {
        height: 24px;
      }
    }
  }
</style>
