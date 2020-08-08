<template>
  <section class="container">
    <div class="main-page" ref="main">
      <ddb-main-slider/>
      <ddb-second-block/>
    </div>
  </section>
</template>

<script>
import DDBSecondBlock from "../components/DDBSecondBlock";
import DDBMainSlider from "../components/DDBMainSlider";
  export default {
    data() {
      return {
        maxItems: 1,
        currentItem: 0
      }
    },
    components: {
      'ddb-second-block': DDBSecondBlock,
      'ddb-main-slider': DDBMainSlider
    },
    computed: {
    },
    methods: {
      onWheel(e) {
        const delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0) {
          if (this.currentItem === this.maxItems) {
            return
          }
          this.currentItem ++;
          const y = this.currentItem * 100;
          this.$refs.main.style.transform = 'translateY(' + -y + 'vh)';
        } else {
          if (this.currentItem === 0) {
            return
          }
          this.currentItem --;
          const y = this.currentItem * 100;
          this.$refs.main.style.transform = 'translateY(' + y + 'vh)';
        }
      }
    },
    mounted() {
      if (window.innerWidth < 1200) {
        return;
      }
      if ('onwheel' in document) {
        window.addEventListener("wheel", this.onWheel);
      } else if ('onmousewheel' in document) {
        window.addEventListener("mousewheel", this.onWheel);
      } else {
        // Firefox < 17
        window.addEventListener("MozMousePixelScroll", this.onWheel);
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @include for-desktop-up {
    .main-page {
      height: 100%;
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
      height: 100vh;
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

