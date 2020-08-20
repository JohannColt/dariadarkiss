<template>
  <section class="container">
    <div class="main-page" ref="main">
      <ddb-main-slider/>
      <ddb-about-me v-bind:is-active="ddbAboutMeIsActive"/>
    </div>
  </section>
</template>

<script>
  import DDBAboutMe from "../components/DDBAboutMe";
  import DDBMainSlider from "../components/DDBMainSlider";

  export default {
    data() {
      return {
        maxItems: 1,
        currentItem: 0,
        ddbAboutMeIsActive: false,
        isMobile: false
      }
    },
    components: {
      'ddb-about-me': DDBAboutMe,
      'ddb-main-slider': DDBMainSlider
    },
    computed: {},
    methods: {
      onWheel(e) {
        const delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0) {
          if (this.currentItem === this.maxItems) {
            return
          }
          this.currentItem++;
          if (this.currentItem === 1) {
            this.ddbAboutMeIsActive = true;
          }
          this.refreshTranslateY();
        } else {
          if (this.currentItem === 0) {
            return
          }
          this.currentItem--;
          this.refreshTranslateY();
        }
      },
      refreshTranslateY() {
        const y = this.currentItem * 100;
        this.$refs.main.style.transform = 'translateY(' + -y + 'vh)';
      },
      addEventListeners() {
        if ('onwheel' in document) {
          window.addEventListener("wheel", this.onWheel);
        } else if ('onmousewheel' in document) {
          window.addEventListener("mousewheel", this.onWheel);
        } else {
          window.addEventListener("MozMousePixelScroll", this.onWheel); // Firefox < 17
        }
      },
      removeEventListeners() {
        this.currentItem = 0;
        this.refreshTranslateY();
        window.removeEventListener("wheel", this.onWheel);
        window.removeEventListener("mousewheel", this.onWheel);
        window.removeEventListener("MozMousePixelScroll", this.onWheel);
      }

    },
    mounted() {
      window.addEventListener('resize', () => {
        if (window.innerWidth < 1200 && !this.isMobile) {
          this.isMobile = true;
          this.removeEventListeners();
        } else if (window.innerWidth >= 1200 && this.isMobile) {
          this.isMobile = false;
          this.addEventListeners();
        }
      })
      if (window.innerWidth < 1200) {
        this.isMobile = true;
        return;
      }
      this.addEventListeners();
    }
  }
</script>

<style lang="scss">
  .container {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .main-page {
    height: 100%;
  }

  @include for-extra-large {
    .main-page {
      width: 100%;
      transition: 1s;
    }
    .main-page--up {
      transform: translateY(100vh);
    }
    .main-page--down {
      transform: translateY(-100vh);
    }
    .container {
      overflow: hidden;
    }
  }

  .page-item-enter {
    transform: translateY(100vh);
  }

  .page-item-enter-active {
    transition: all 0.5s ease;
  }

  .page-item-leave {
    transform: translateY(-100vh);
  }

</style>

