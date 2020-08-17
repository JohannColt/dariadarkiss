<template>
  <div :class="mainClass">
    <slot/>
    <img v-if="isActive" class="ddb-button__line" src="/images/ui-elements/button-line.svg" alt="button-line">
  </div>
</template>

<script>
export default {
  name: "ddb-button",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    mainClass() {
      return this.isActive ? 'ddb-button ddb-button--active' : 'ddb-button';
    }
  }
}
</script>

<style scoped lang="scss">
  .ddb-button {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.6rem;
    &__line {
      display: none;
    }
  }
  @include for-desktop-up {
    .ddb-button {
      &__line {
        display: block;
        position: absolute;
        bottom: 1px;
        left: 0;
      }
      &:before, &:after {
        content: '';
        width: 0;
        position: absolute;
        border-top: 0 solid $primary-color1;
        transition: width 1s, border-top-width 1s;
      }
      &:before {
        top: 0;
        right: 0;
      }
      &:after {
        bottom: 1px;
        left: 0;
      }
      &:hover {
        &:before, &:after {
          border-width: 1px;
          width: 100%;
        }
      }
    }
  }
</style>
