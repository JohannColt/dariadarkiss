<template>
  <section class="vertical-magnet">
    <div class="magnet-scroll" ref="main">
      <ddb-main-slider class="slide slide-1"/>
      <div class="slide slide-2 scrollable">
        <ddb-second-block/>
        <ddb-slider/>
        <ddb-price-block/>
        <ddb-popular-photosession/>
        <ddb-instagram/>
        <ddb-send-to-me/>
        <ddb-footer></ddb-footer>

      </div>
    </div>
  </section>
</template>

<script>
import DDBSecondBlock from "../components/DDBAboutMe";
import DDBMainSlider from "../components/DDBMainSlider";
import DDBSlider from "@/components/DDBLastWorks";
import DDBPriceBlock from "../components/DDBPriceBlock";
import DDBPopularPhotosession from "../components/DDBPopularPhotosession";
import DDBInstagramBlock from "../components/DDBInstagramBlock";
import DDBSendToMe from "../components/DDBSendToMe";
import DDBFooter from "../components/DDBFooter";


export default {
  components: {
    'ddb-second-block': DDBSecondBlock,
    'ddb-main-slider': DDBMainSlider,
    'ddb-slider': DDBSlider,
    'ddb-price-block': DDBPriceBlock,
    'ddb-popular-photosession': DDBPopularPhotosession,
    'ddb-instagram': DDBInstagramBlock,
    'ddb-send-to-me': DDBSendToMe,
    'ddb-footer': DDBFooter

  },
  data() {
    return {
      magneticScrollableSlide: [],
      verticalMagnet: false,
      magnetScroll: false,
      slides: [],
      lastScroll: false,
      threshold: 700,
      slideHeight: 80,
      slideHeights: [100, 100],
      touchThreshold: 100,
      currentSlide: 1,
      exitingScrollable: false,
      touchStart: false,
      topOnTouchStart: false,
      parsed: 0
    }
  },
  computed: {
    numberOfSlides() {
      return this.slides.length
    }
  },
  methods: {
    getAccumulatedHeight() {
      let acc = 0;
      this.slideHeights.forEach((it, ind) => {
        if (this.currentSlide - 1 > ind) {
          acc += it;
        }
      });
      return acc
    },
    getPercentageOfScroll(element) {
      return (
        (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100
      );
    },
    getTime() {
      return new Date().getTime();
    },
    wheel(e) {
      const current = document.querySelector(".slide-" + this.currentSlide);
      if (current.className.indexOf("scrollable") === -1 || this.exitingScrollable) {
        const time = this.getTime();
        if (this.lastScroll + this.threshold < time) {
          this.lastScroll = time;
          if (e.deltaY > 0) {
            if (this.currentSlide !== this.numberOfSlides) {
              this.currentSlide += 1;
            }
          } else {
            if (this.currentSlide !== 1) {
              this.currentSlide -= 1;
            } else {
              this.lastScroll -= this.threshold;
            }
          }
          this.magnetScroll.style.top = this.getAccumulatedHeight() * -1 + "vh";
          this.exitingScrollable = false;
        }
      }
    },
    scrollableWheel(ev) {
      const elementSlide = parseInt(
        this.magneticScrollableSlide.className.match(/slide\-[0-9]+/)[0].replace(/slide\-([0-9]+)/, "$1")
      );
      const scroll = this.getPercentageOfScroll(this.magneticScrollableSlide);
      if (
        elementSlide === this.currentSlide &&
        ((scroll === 0 && ev.deltaY < -50))
      ) {
        this.exitingScrollable = true;
      }
    },
    initScrolling() {
      this.lastScroll = this.getTime();
      [...this.slides].forEach((i, index) => {
        i.style.height = this.slideHeights[index] + 'vh';
      });
      this.verticalMagnet.addEventListener("wheel", this.wheel);
      this.magneticScrollableSlide.addEventListener("wheel", this.scrollableWheel);
    },
    dropScrolling() {
      [...this.slides].forEach((i, index) => {
        i.style = {};
      });
      this.verticalMagnet.removeEventListener("wheel", this.wheel);
      this.magneticScrollableSlide.removeEventListener("wheel", this.scrollableWheel);
    }
  },
  mounted() {
    this.magneticScrollableSlide = document.querySelector(".scrollable");
    this.verticalMagnet = document.querySelector(".vertical-magnet");
    this.magnetScroll = document.querySelector(".magnet-scroll");
    this.slides = document.querySelectorAll(".slide");
    if (window.innerWidth >= 992) {
      this.initScrolling();
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 992) {
        this.dropScrolling();
      } else {
        this.dropScrolling();
        this.initScrolling();
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.vertical-magnet {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.magnet-scroll {
  position: absolute;
  transition: top 750ms ease;
  top: 0;
  width: 100%;
}
.slide {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
@include for-large {
  .vertical-magnet {
    width: 100vw;
    overflow: hidden;
    position: relative;
  }

  .slide.scrollable {
    overflow-y: scroll;
  }
}

</style>

