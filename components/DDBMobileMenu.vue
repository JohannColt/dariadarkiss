<template>
  <div class="ddb-header__menu" :class="themeClass">
    <div class="ddb-header__menu__elem">
      <NuxtLink v-bind:class=themeClassText to="/portfolio">
        Портфолио
      </NuxtLink>
    </div>
    <div v-on:click="isClickedPrice"  class="ddb-header__menu__elem" v-bind:class=themeClassText>
      Цены
    </div>
    <div v-on:click="isClickedPop" class="ddb-header__menu__elem" v-bind:class=themeClassText>
      Услуги
    </div>
    <div v-on:click="isClickedSend" class="ddb-header__menu__elem" v-bind:class=themeClassText>
      Контакты
    </div>
  </div>
</template>

<script>
export default {
  name: "ddb-mobile-menu",
  computed: {
    themeClassText() {
      if (this.$store.state.headerState === 0){
        return "default-text"
      }
      if (this.$store.state.headerState === 1){
        return "default-text-on-black"
      }
    },
    themeClass() {
      if (this.$store.state.headerState === 0){
        return "ddb-header__menu__white"
      }
      if (this.$store.state.headerState === 1){
        return "ddb-header__menu__black"
      }
    },
    themeNumber() {
      return this.$store.state.headerState
    }
  },
  methods: {
    isClickedPrice() {
      this.$store.commit('changeToOneBlock')
      if (this.$store.state.pageCounter === 0) {
        const a = document.getElementById('ddb-price')
        a.scrollIntoView({behavior: "smooth"});
      }
      else this.$router.push('/');
    },
    isClickedPop() {
      this.$store.commit('changeToTwoBlock')
      if (this.$store.state.pageCounter === 0) {
        const b = document.getElementById('ddb-popular')
        b.scrollIntoView({behavior: "smooth"});
      }
      else this.$router.push('/');
    },
    isClickedSend() {
      this.$store.commit('changeToThreeBlock')
      if (this.$store.state.pageCounter === 0) {
        const c = document.getElementById('ddb-send-to-me')
        c.scrollIntoView({behavior: "smooth"});
      }
      else this.$router.push('/');
    },
    clicked() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.ddb-header__menu {
  position: absolute;
  width: 100%;
  z-index: 2;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparentize($primary-color2, 0.6);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba($primary-color1, 0.2);
  &__black{
    background-color: #3F2D2D;
    color: #F0ECEC;
    border-top: 1px solid rgba($primary-color2, 0.2);
  }
}


.ddb-header__menu__elem {
  text-align: center;
  line-height: 32px;
  padding: 12px;
  font-weight: $font-weight-semi-bold;
  text-transform: uppercase;

  &:first-child {
    padding-top: 24px;
  }

  &:last-child {
    padding-bottom: 32px;
  }
}

</style>
