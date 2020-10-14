<template>
  <div class="ddb-header__menu">
    <div class="ddb-header__menu__elem">
      <NuxtLink class="default-text" to="/portfolio">
          Портфолио
      </NuxtLink>
    </div>
    <div v-on:click="isClickedPrice" class="ddb-header__menu__elem">
      Цены
    </div>
    <div v-on:click="isClickedPop" class="ddb-header__menu__elem">
      Услуги
    </div>
    <div v-on:click="isClickedSend" class="ddb-header__menu__elem">
      Контакты
    </div>
  </div>
</template>

<script>
  export default {
    name: "ddb-mobile-menu",
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
