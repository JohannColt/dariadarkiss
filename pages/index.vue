<template>
  <section class="main-container">
    <div :class="mainClasses" ref="main">
      <ddb-main-slider/>
      <ddb-second-block/>
      <ddb-slider/>
    </div>
  </section>
</template>

<script>
import DDBSecondBlock from "../components/DDBAboutMe";
import DDBMainSlider from "../components/DDBMainSlider";
import DDBSlider from "@/components/DDBLastWorks";

export default {
  data() {
    return {
      maxItems: 1,
      currentItem: 0,
      scrolling: false,
      mainClasses: 'main-page main-page--hidden-overflow'
    }
  },
  components: {
    'ddb-second-block': DDBSecondBlock,
    'ddb-main-slider': DDBMainSlider,
    'ddb-slider': DDBSlider
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
        this.mainClasses = 'main-page'
        this.currentItem ++;
        const y = this.currentItem * 100;
        this.$refs.main.style.transform = 'translateY(' + -y + 'vh)';
      } else {
        if (this.currentItem === 0) {
          return
        }
        if (window.scrollY < 100) {
          this.mainClasses = 'main-page main-page--hidden-overflow'
          this.currentItem --;
          const y = this.currentItem * 100;
          this.$refs.main.style.transform = 'translateY(' + -y + 'vh)';
        }
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
  .main-container {
    &--hidden-overflow {
      overflow: hidden;
    }
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

