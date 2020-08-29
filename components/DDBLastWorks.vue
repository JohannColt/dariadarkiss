<template>
  <div class="ddb-last-works">
    <div class="ddb-last-works__container container">
      <div class="ddb-last-works__header">Мои последние работы</div>
      <div class="ddb-last-works__body">
        <ddb-slider/>
      </div>
    </div>
  </div>
</template>

<script>
import DDBSlider from "@/components/DDBSlider";
export default {
  name: "ddb-last-works",
  components: {
    'ddb-slider' : DDBSlider
  }
}
</script>

<style scoped lang="scss">
  .ddb-last-works {
    display: flex;
    justify-content: center;
    overflow: hidden;
    &__container {
      text-align: left;
      padding-top: 67px;
    }
    &__header {
      font-size: 1.5em;
      line-height: 2rem;
      font-weight: 700;
    }
  }
  @include for-large{
    .ddb-last-works {
      &__container {
        padding-top: 104px;
      }
      &__header {
        font-size: 2.5em;
        line-height: 3rem;
        margin-bottom: 24px;
      }
    }
  }
</style>
