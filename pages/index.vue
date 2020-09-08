<template>
  <section class="vertical-magnet">
    <div class="magnet-scroll" ref="main">
      <ddb-main-slider class="slide slide-1"/>
      <div class="slide slide-2 scrollable">
        <ddb-second-block/>
        <ddb-slider/>
        <ddb-footer/>
      </div>
    </div>
  </section>
</template>

<script>
import DDBSecondBlock from "../components/DDBAboutMe";
import DDBMainSlider from "../components/DDBMainSlider";
import DDBSlider from "@/components/DDBLastWorks";
import DDBFooter from "../components/DDBFooter";

export default {
  components: {
    'ddb-second-block': DDBSecondBlock,
    'ddb-main-slider': DDBMainSlider,
    'ddb-slider': DDBSlider,
    'ddb-footer': DDBFooter
  },
  data() {
    return {
      magneticScrollableSlides: false,
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
    initScrolling() {
      this.magneticScrollableSlides = document.querySelectorAll(".scrollable");
      this.verticalMagnet = document.querySelector(".vertical-magnet");
      this.magnetScroll = document.querySelector(".magnet-scroll");
      this.slides = document.querySelectorAll(".slide");
      this.lastScroll = this.getTime();
      [...this.slides].forEach((i, index) => {
        i.style.height = this.slideHeights[index] + 'vh';
      });
      this.verticalMagnet.addEventListener("touchstart", (e) => {
        this.touchStart = e.touches[0].clientY;
        this.parsed = 1;
      });
      this.verticalMagnet.addEventListener("touchmove", (e) => {
        if (this.parsed === 1) {
          const touchMove = e.touches[0].clientY;
          if (Math.abs(touchMove - this.touchStart) > this.touchThreshold) {
            if (touchMove - this.touchStart > 0) {
              this.currentSlide -= 1;
            } else {
              this.currentSlide += 1;
            }
            this.magnetScroll.style.top = this.getAccumulatedHeight() * -1 + "vh";
            this.parsed = 2;
          }
        }
      });
      this.verticalMagnet.addEventListener("touchend", () => {
        this.parsed = 0;
      });
      this.verticalMagnet.addEventListener("wheel", (e) => {
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
      });
      [...this.magneticScrollableSlides].forEach((el) => {
        el.addEventListener("wheel", (ev) => {
          const elementSlide = parseInt(
            el.className.match(/slide\-[0-9]+/)[0].replace(/slide\-([0-9]+)/, "$1")
          );
          const scroll = this.getPercentageOfScroll(el);
          if (
            elementSlide === this.currentSlide &&
            ((scroll === 0 && ev.deltaY < 0) || (scroll === 100 && ev.deltaY > 0))
          ) {
            this.exitingScrollable = true;
          }
        });
      });
    }
  },
  mounted() {
    if (window.innerWidth > 992) {
      this.initScrolling();
    }
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
  background: #E5E5E5;
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

