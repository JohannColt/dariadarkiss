<template>
  <div class="ddb-last-works">
    <div class="ddb-last-works__container">
      <div class="ddb-last-works__header">Мои последние работы</div>
      <div class="ddb-last-works__body"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ddb-last-works"
}
</script>

<style scoped lang="scss">
  .ddb-last-works {
    &__container {
      text-align: left;
      height: 100%;
      padding: 104px 90px 0;
    }
    &__header {
      font-size: 2.5em;
      line-height: 3rem;
      font-weight: 700;
    }
  }
</style>
