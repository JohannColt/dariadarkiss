<template>
  <button :type="type" v-on:click="clicked" v-on:submit="submit" :class="mainClass">
    <slot/>
    <svg v-if="isActive" class="ddb-button__line"  width="48" height="1" viewBox="0 0 48 1" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect class="ddb-button__rect" v-bind:class="{ 'ddb-button__rect__black' : themeBool}" x="48" y="1" width="4" height="1" transform="rotate(180 48 1)"/>
      <rect class="ddb-button__rect" v-bind:class="{ 'ddb-button__rect__black' : themeBool}" x="40" y="1" width="4" height="1" transform="rotate(180 40 1)"/>
      <rect class="ddb-button__rect" v-bind:class="{ 'ddb-button__rect__black' : themeBool}" x="32" y="1" width="32" height="1" transform="rotate(180 32 1)"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: "ddb-button",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isBigButton: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    mainClass() {
      let resultClasses = this.isActive ? 'ddb-button ddb-button--active' : 'ddb-button';
      resultClasses = this.isBigButton ? resultClasses + ' ddb-button--big' : resultClasses;
      return resultClasses;
    },
    themeNumber() {
      return this.$store.state.headerState
    },
    themeBool() {
      if (this.themeNumber === 1){
        return true
      }
    }
  },
  methods:{
    clicked() {
      this.$emit('click')
    },
    submit(e) {
      this.$emit('submit', e)
      console.log({e})
    }
  },

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
    border: none;
    background: unset;
    outline:none;
    &__line {
      display: none;
      width: 60%;
    }
    &--big {
      text-transform: uppercase;
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 0.04em;
      font-weight: $font-weight-bold;
    }
    &__rect{
      fill:#3F2D2D;
      &__black{
        fill: $primary-color2;
      }
    }
  }
  @include for-large {
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
        height: 1px;
        position: absolute;
        border-top: 1px solid $primary-color1;
        transition: width 1s, border-top-width 1s;
      }
      &:before {
        top: 0;
        right: 0;
      }
      &:after {
        bottom: 0;
        left: 0;
      }
      &:hover {
        &:before, &:after {
          width: 100%;
        }
      }
    }
  }
</style>
