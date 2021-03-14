<template>
  <div v-on:click="clicked(); changePick(); changeTheHeader()" className="ddb-picture">
    <slot></slot>
    <div v-if="isActivePic" className="ddb-picture__slot">
      <div className="ddb-picture__slot__elem">
        <slot name="big-pic"></slot>
      </div>
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
  methods: {
    clicked() {
      this.isActivePic = !this.isActivePic
    },
    changeTheHeader() {
      if (this.themeNumber === 0) {
        this.changeToOneHeader();
      } else if (this.themeNumber === 1) {
        this.changeToZeroHeader();
      }
    },
    changeToOneHeader() {
      this.$store.commit('changeToOneHeader')
    },
    changeToZeroHeader() {
      this.$store.commit('changeToZeroHeader')
    },
    changePick() {
      if (this.pickNumber === 0) {
        this.$store.commit('changeToOnePick')
      } else if (this.pickNumber === 1) {
        this.$store.commit('changeToZeroPick')
      }
    }
  },
  computed: {
    themeNumber() {
      return this.$store.state.headerState
    },
    pickNumber() {
      return this.$store.state.isClickedPick
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
    top: 0;
    left: 0;

    &__elem {
      opacity: 1;
      max-width: 80vw;
      max-height: 80vh;
      object-fit: cover;
    }
  }
}
</style>
