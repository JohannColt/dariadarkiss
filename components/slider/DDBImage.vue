<template>
  <div class="ddb-image">
    <div class="ddb-image__wrapper">
      <div class="ddb-image__img" v-if="url !== ''">
        <img :src="url" alt="image">
      </div>
      <div class="ddb-image__img ddb-image__img--blur" v-if="blurUrl !== ''">
        <img :src="blurUrl" alt="blur-image">
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
    },
    blurUrl: {
      type: String,
      default: ''
    },
    blur: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: 'url(' + this.url + ')'
      };
    },
    blurStyle() {
      return {
        backgroundImage: 'url(' + this.blurUrl + ')'
      };
    }
  }
}
</script>

<style scoped lang="scss">
  .ddb-image {
    height: 100%;
    width: 100%;
    padding: 6px;
    background: #fff;
    &__wrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }
    &__img {
      width: 100%;
      height: 100%;
      position: absolute;
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
      padding: 12px;
    }
  }
</style>
