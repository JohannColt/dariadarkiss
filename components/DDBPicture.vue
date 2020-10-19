<template>
  <div v-on:click="clicked" class="ddb-picture">
    <slot></slot>
    <div v-if="isActivePic" class="ddb-picture__slot">
      <slot  class="ddb-picture__slot__elem"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBPicture",
    data() {
      return {
        isActivePic: false
      }
    },
    methods:{
      clicked() {
      this.isActivePic= !this.isActivePic
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ddb-picture {
    cursor: pointer;
    &__slot {
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      height: 100vh;
      width: 100vw;
      background: rgba(0, 0, 0, 0.5);;
      top:0;
      left: 0;
      &__elem {
        opacity: 1;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
