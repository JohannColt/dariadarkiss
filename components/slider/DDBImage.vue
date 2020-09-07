<template>
  <div class="ddb-image">
    <div class="ddb-image__wrapper">
      <div class="ddb-image__img" v-if="url !== ''" :style="style">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ddb-image",
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: 'url(' + this.url + ')'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .ddb-image {
    height: 100%;
    width: 100%;
    &__wrapper {
      padding: 6px;
      position: relative;
      height: 100%;
      width: 100%;
      background: #fff;
    }
    &__img {
      width: 100%;
      height: 100%;
      position: relative;
      background: transparent no-repeat center center;
      background-size: cover;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  @include for-large {
    .ddb-image {
      &__wrapper {
        padding: 12px;
      }
    }
  }
</style>
