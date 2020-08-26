<template>
  <section class="main-container">
    <div class="main-page" ref="main">
      <ddb-main-slider/>
      <ddb-last-work/>
    </div>
  </section>
</template>

<script>
import DDBSecondBlock from "../components/DDBSecondBlock";
import DDBMainSlider from "../components/DDBMainSlider";
import DDBLastWork from "@/components/DDBLastWorks";

  export default {
    data() {
      return {
        maxItems: 1,
        currentItem: 0,
        scrolling: false
      }
    },
    components: {
      'ddb-second-block': DDBSecondBlock,
      'ddb-main-slider': DDBMainSlider,
      'ddb-last-work': DDBLastWork
    },
    methods: {
      onWheel(e) {
        const delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0) {
          if (this.currentItem !== this.maxItems) {
            this.currentItem++;
            scrollTo({
              top: window.innerHeight,
              behavior: "smooth"
            });
            return false;
          }
        } else if (window.pageYOffset <= window.innerHeight && this.currentItem > 0) {
          this.currentItem--;
          scrollTo({
            top: 0,
            behavior: "smooth"
          })
          return false;
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
  .main-container {
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
    width: 100%;
  }
  @include for-desktop-up {
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

