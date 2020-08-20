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
      <transition name="ddb-animation-bottom">
        <div class="ddb-main-slider__switcher" v-if="showBottom">
          <div class="ddb-main-slider__buttons">
            <div class="ddb-main-slider__button-wrapper" @click="setIndex(key)" :key="key"
                 v-for="(banner, key) in banners">
              <div v-if="key === currentIndex" class="ddb-main-slider__button ddb-main-slider__button--active"></div>
              <div v-else class="ddb-main-slider__button"></div>
            </div>
          </div>
          <div class="ddb-main-slider__instagram">
            <div class="ddb-main-slider__instagram-link">
              <a class="default-text" href="https://www.instagram.com/dariadarkiss" target="_blank">
                @dariadarkiss
              </a>
            </div>
            <a class="default-text" href="https://www.instagram.com/dariadarkiss" target="_blank">
              <img src="/images/ui-elements/instagram.svg" alt="instagram">
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import DDBHeader from "../components/DDBHeader";

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
        pressedPositionX: 0,
        pressedPositionY: 0,
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
        showBottom: false,
      }
    },
    components: {
      'ddb-header': DDBHeader,
    },
    mounted() {
      this.elements = document.querySelectorAll('.ddb-main-slider__item');
      this.progressBar = document.querySelector('.ddb-main-slider__progress');
      this.elements[this.currentIndex].classList.add(this.activeClassName);
      window.addEventListener('mouseup', this.mouseUp);
      window.addEventListener('touchend', this.mouseUp);
      window.addEventListener('resize', this.progress);

      if (window.innerWidth < 1200) {
        this.showBottom = true
      }
      setTimeout(this.displayBottom, 550);
      setTimeout(() => {
        this.startAutoPlay();
        this.startProgress();
      }, 1350);
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
        const percentsByIter = 100 / pieces;
        this.progressWidth += percentsByIter;
        this.progressBar.style.width = this.progressWidth + '%';
      },
      refreshWidth() {
        this.progressWidth = 0
        this.progressBar.style.width = this.progressWidth + '%';
      },
      refreshDistance() {
        this.distance = 0;
        this.movingOpacity = 0;
      },
      srcset(data) {
        return data.mobile + ' 320w, ' + data.tablet + ' 480w, ' + data.desktop + ' 800w'
      },
      mouseDown(event) {
        if (window.innerWidth >= 1200) {
          event.preventDefault()
        }
        this.buttonPressed = true;
        if (event.changedTouches && event.changedTouches.length > 0) {
          this.pressedPositionX = event.changedTouches[0].clientX;
          this.pressedPositionY = event.changedTouches[0].clientY;
          return
        }
        this.pressedPositionX = event.clientX;
        this.pressedPositionY = event.clientY;
      },
      mouseUp(event) {
        if (this.buttonPressed) {
          if (event.cancelable) {
            event.preventDefault()
          }
          this.buttonPressed = false;
          this.update();
        }
      },
      mouseMove(event) {
        if (this.buttonPressed) {
          let eventPosition;
          if (event.changedTouches && event.changedTouches.length > 0) {
            if (this.swipeScroll(event.changedTouches)) {
              return
            }
            eventPosition =  event.changedTouches[0].clientX;
          } else {
            eventPosition = event.clientX;
          }
          this.distance = eventPosition - this.pressedPositionX;
          this.moving();
        }
        if (event.cancelable) {
          event.preventDefault()
        }
      },
      swipeScroll(changedTouches) {
        const clientX = changedTouches[0].clientX;
        const clientY = changedTouches[0].clientY;
        const distanceX = Math.abs(clientX - this.pressedPositionX);
        const distanceY = Math.abs(clientY - this.pressedPositionY);
        return distanceY > distanceX;
      },
      update() {
        this.elements[this.currentIndex].style = {};
        this.elements[this.nextIndex].style = {};
        this.elements[this.prevIndex].style = {};
        const animation = window.innerWidth < 1200;
        if (this.distance < 0 && this.movingOpacity > 0.5) {
          this.next(animation);
        } else if (this.distance > 0 && this.movingOpacity > 0.5) {
          this.prev(animation);
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
        if (window.innerWidth < 1200) {
          return
        }
        this.elements[this.currentIndex].style.opacity = 1 - this.movingOpacity;
        if (this.distance < 0 ) {
          this.elements[this.nextIndex].style.opacity = this.movingOpacity;
          this.elements[this.nextIndex].style.transform = "scale(" + currentScale + ")";
        } else {
          this.elements[this.prevIndex].style.opacity = this.movingOpacity;
          this.elements[this.prevIndex].style.transform = "scale(" + currentScale + ")";
        }
      },
      setIndex(index) {
        clearInterval(this.interval)
        clearInterval(this.progressInterval)
        this.refreshWidth();
        this.elements[this.currentIndex].classList.remove(this.classWithoutAnimation);
        this.elements[this.currentIndex].classList.remove(this.activeClassName);
        this.elements[index].classList.add(this.activeClassName);
        this.currentIndex = index;
        this.startAutoPlay();
        this.startProgress();
      },
      next(animation = true) {
        clearInterval(this.interval)
        clearInterval(this.progressInterval)
        this.refreshWidth();
        this.refreshDistance();
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
        this.refreshDistance();
        this.elements[this.currentIndex].classList.remove(this.classWithoutAnimation);
        this.elements[this.currentIndex].classList.remove(this.activeClassName);
        this.elements[this.prevIndex].classList.add(this.activeClassName);
        if (!animation) {
          this.elements[this.prevIndex].classList.add(this.classWithoutAnimation);
        }
        this.currentIndex = this.prevIndex;
        this.startAutoPlay();
        this.startProgress();
      },
      displayBottom() {
        this.showBottom = true;
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
    height: 100%;
    &__container {
      height: 100%;
      position: relative;
      z-index: 1;
    }
    &__wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
    }
    &__progress {
      width: 0;
      height: 5px;
      background: #ffffff;
      position: absolute;
      z-index: 2;
      top: 48px;
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
    &__switcher {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 48px;
      padding: 0 40px;
      background: transparentize($primary-color2, 0.6);
      backdrop-filter: blur(10px);
    }
    &__buttons {
      display: flex;
      align-items: center;
    }
    &__button-wrapper {
      margin-left: 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
    }
    &__button {
      width: 16px;
      height: 16px;
      border-radius: 32px;
      border: 1px solid $primary-color1;
      &--active {
        background-color: $primary-color1;
      }
    }
    &__instagram {
      display: none;
      align-items: center;
      img {
        height: 24px;
      }
    }
    &__instagram-link {
      margin-right: 16px;
    }
  }

  .ddb-animation-bottom-enter {
    transform: translateY(80px);
  }
  .ddb-animation-bottom-enter-active {
    transition: all 0.3s ease;
  }

  @include for-extra-large {
    .ddb-main-slider {
      &__switcher {
        height: 80px;
      }
      &__progress {
        top: 80px;
      }
    }
    .ddb-main-slider__instagram {
      display: flex;
    }
    .ddb-main-slider__switcher {
      justify-content: space-between;
    }
  }
</style>
