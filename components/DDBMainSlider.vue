<template>
  <div class="ddb-main-slider">
    <div class="ddb-main-slider__container" ref="mySwiper">
      <div class="ddb-main-slider__progress"></div>
      <div class="ddb-main-slider__wrapper">
        <div class="ddb-main-slider__item" :ref="'item-' + key"
             :key="key" v-for="(banner, key) in banners">
          <img :src="banner.desktop" alt="image" :srcset="srcset(banner)"
               @mousedown="mouseDown"
               @mousemove="mouseMove"
               @touchstart="mouseDown"
               @touchmove="mouseMove"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBMainSlider",
    data() {
      return {
        activeClassName: 'ddb-main-slider__item--active',
        classWithoutAnimation: 'ddb-main-slider__item--boring',
        elements: null,
        progressBar: null,
        buttonPressed: false,
        autoplayDelay: 6000,
        pressedPosition: 0,
        progressWidth: 0,
        distance: 0,
        movingOpacity: 0,
        currentIndex: 0,
        interval: null,
        progressInterval: null,
        banners: [
          {
            mobile: '/images/slider/1.jpg',
            tablet: '/images/slider/1.jpg',
            desktop: '/images/slider/1.jpg'
          }, {
            mobile: '/images/slider/2.jpg',
            tablet: '/images/slider/2.jpg',
            desktop: '/images/slider/2.jpg'
          }, {
            mobile: '/images/slider/3.jpg',
            tablet: '/images/slider/3.jpg',
            desktop: '/images/slider/3.jpg'
          }, {
            mobile: '/images/slider/4.jpg',
            tablet: '/images/slider/4.jpg',
            desktop: '/images/slider/4.jpg'
        }
        ],
      }
    },
    mounted() {
      this.elements = document.querySelectorAll('.ddb-main-slider__item');
      this.progressBar = document.querySelector('.ddb-main-slider__progress');
      this.elements[this.currentIndex].classList.add(this.activeClassName);
      window.addEventListener('mouseup', this.mouseUp);
      window.addEventListener('touchend', this.mouseUp);
      this.startAutoPlay();
      this.startProgress();
    },
    methods: {
      startProgress() {
        this.progressInterval = setInterval(this.progress, 5)
      },
      startAutoPlay() {
        this.interval = setInterval(this.autoplay, this.autoplayDelay)
      },
      autoplay() {
        this.next()
      },
      progress() {
        const pieces = this.autoplayDelay / 5;
        const pixelsByIter = window.innerWidth / pieces;
        this.progressWidth += pixelsByIter;
        this.progressBar.style.width = this.progressWidth + 'px';
      },
      refreshWidth() {
        this.progressWidth = 0
        this.progressBar.style.width = this.progressWidth + 'px';
      },
      srcset(data) {
        return data.mobile + ' 320w, ' + data.tablet + ' 480w, ' + data.desktop + ' 800w'
      },
      mouseDown(event) {
        event.preventDefault()
        this.buttonPressed = true;
        if (event.changedTouches && event.changedTouches.length > 0) {
          this.pressedPosition = event.changedTouches[0].clientX
          return
        }
        this.pressedPosition = event.clientX;
      },
      mouseUp(event) {
        if (this.buttonPressed) {
          event.preventDefault()
          this.buttonPressed = false;
          this.update();
        }
      },
      mouseMove(event) {
        event.preventDefault()
        if (this.buttonPressed) {
          let eventPosition;
          if (event.changedTouches && event.changedTouches.length > 0) {
            eventPosition =  event.changedTouches[0].clientX;
          } else {
            eventPosition = event.clientX;
          }
          this.distance = eventPosition - this.pressedPosition;
          this.moving();
        }
      },
      update() {
        this.elements[this.currentIndex].style = {};
        this.elements[this.nextIndex].style = {};
        this.elements[this.prevIndex].style = {};
        if (this.distance < 0 && this.movingOpacity > 0.5) {
          this.next(false);
        } else if (this.distance > 0 && this.movingOpacity > 0.5) {
          this.prev(false);
        }
      },
      moving() {
        const maxDistance = window.innerWidth / 4;
        const finishedScale = 1;
        const startScale = 1.5;
        const currentOpacity = this.distance < 0 ? -this.distance / maxDistance : this.distance / maxDistance;
        this.movingOpacity = currentOpacity > 1 ? 1 : currentOpacity;
        let currentScale = startScale * (1 - this.movingOpacity);
        currentScale = currentScale < finishedScale ? finishedScale : currentScale;
        this.elements[this.currentIndex].style.opacity = 1 - this.movingOpacity;
        if (this.distance < 0) {
          this.elements[this.nextIndex].style.opacity = this.movingOpacity;
          this.elements[this.nextIndex].style.transform = "scale(" + currentScale + ")";
        } else {
          this.elements[this.prevIndex].style.opacity = this.movingOpacity;
          this.elements[this.prevIndex].style.transform = "scale(" + currentScale + ")";
        }
      },
      next(animation = true) {
        clearInterval(this.interval)
        clearInterval(this.progressInterval)
        this.refreshWidth();
        this.elements[this.currentIndex].classList.remove(this.classWithoutAnimation);
        this.elements[this.currentIndex].classList.remove(this.activeClassName);
        this.elements[this.nextIndex].classList.add(this.activeClassName);
        if (!animation) {
          this.elements[this.nextIndex].classList.add(this.classWithoutAnimation);
        }
        this.currentIndex = this.nextIndex;
        this.startAutoPlay();
        this.startProgress();
      },
      prev(animation = true) {
        clearInterval(this.interval)
        clearInterval(this.progressInterval)
        this.refreshWidth();
        this.elements[this.currentIndex].classList.remove(this.classWithoutAnimation);
        this.elements[this.currentIndex].classList.remove(this.activeClassName);
        this.elements[this.prevIndex].classList.add(this.activeClassName);
        if (!animation) {
          this.elements[this.prevIndex].classList.add(this.classWithoutAnimation);
        }
        this.currentIndex = this.prevIndex;
        this.startAutoPlay();
        this.startProgress();
      }
    },
    computed: {
      nextIndex() {
        if (this.currentIndex === this.max) {
          return 0
        }
        return this.currentIndex + 1;
      },
      prevIndex() {
        if (this.currentIndex === 0) {
          return this.max;
        }
        return this.currentIndex - 1;
      },
      max() {
        return this.banners.length - 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ddb-main-slider {
    width: 100%;
    height: 100vh;
    &__container {
      height: 100%;
      position: relative;
    }
    &__wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
    }
    &__progress {
      width: 100%;
      height: 5px;
      background: #ffffff;
      position: absolute;
      top: 80px;
      z-index: 1;
    }
    &__item {
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      transform: scale(1.5);
      img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
      }
      &--active {
        animation: fadein 0.7s;
        opacity: 1;
        transition: transform 0.7s;
        transform: scale(1);
        @keyframes fadein {
          from { opacity: 0.4; }
          to   { opacity: 1; }
        }
      }
      &--boring {
        animation: unset;
      }
    }
  }
</style>
