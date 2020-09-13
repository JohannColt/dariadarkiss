<template>
  <div class="ddb-slider">

    <div class="ddb-slider__photos ddb-slider__photos--desktop" ref="slider" @mousedown.prevent="mouseDown">
    </div>

    <div class="ddb-slider__photos ddb-slider__photos--mobile" :style="style"
         @touchstart.prevent="touchStart">
      <div v-for="(images, key) in items" :key="key" class="ddb-slider__item">
        <template v-for="(image, k) in images">
          <div :key="k" v-if="image.position === 'vertical'" class="ddb-slider__group ddb-slider__group--vertical">
            <ddb-image class="ddb-slider__image" :url="image.src"/>
          </div>
          <div :key="k" v-else-if="k === 0 || images[k - 1].position !== 'horizontal'" class="ddb-slider__group ddb-slider__group--horizontal">
            <ddb-image class="ddb-slider__image" :url="image.src"/>
            <ddb-image class="ddb-slider__image" :url="images[k + 1].src"/>
          </div>
        </template>
      </div>
    </div>

    <div class="ddb-slider__scroller">
      <div v-for="(_, key) in items" :key="key" @click="move(key)"
           :class="['ddb-slider__nav', 'ddb-slider__nav--desktop', current === key ? 'ddb-slider__nav--active': '']"/>
      <div class="ddb-slider__line" ref="line" @click="moveMobile"/>
      <div :style="mobileNavStyle" class="ddb-slider__nav ddb-slider__nav--mobile"/>
    </div>
  </div>
</template>

<script>
import DDBImage from "@/components/slider/DDBImage";
import Vue from 'vue';
import DDBSliderLine from "@/components/slider/DDBSliderLine";

export default {
  name: "DDBSlider",
  components: {
    'ddb-image': DDBImage
  },
  data() {
    return {
      current: 0,
      scrolling: false,
      startPosition: 0,
      endPosition: 0,
      offset: 0,
      oldOffset: 0,
      maxOffset: 0,
      line: null,
      items: [
        [
          {
            src: '/images/last-works-slider/5.jpg',
            srcBlur: '/images/last-works-slider/5-blur.jpg',
            position: 'vertical'
          },
          {
            src: '/images/last-works-slider/3.jpg',
            srcBlur: '/images/last-works-slider/3-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/4.jpg',
            srcBlur: '/images/last-works-slider/4-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/6.jpg',
            srcBlur: '/images/last-works-slider/6-blur.jpg',
            position: 'vertical'
          },
        ],
        [
          {
            src: '/images/last-works-slider/21.jpg',
            srcBlur: '/images/last-works-slider/21-blur.jpg',
            position: 'vertical'
          },
          {
            src: '/images/last-works-slider/1.jpg',
            srcBlur: '/images/last-works-slider/1-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/2.jpg',
            srcBlur: '/images/last-works-slider/2-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/14.jpg',
            srcBlur: '/images/last-works-slider/14-blur.jpg',
            position: 'vertical'
          }
        ],
        [
          {
            src: '/images/last-works-slider/7.jpg',
            srcBlur: '/images/last-works-slider/7-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/8.jpg',
            srcBlur: '/images/last-works-slider/8-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/15.jpg',
            srcBlur: '/images/last-works-slider/15-blur.jpg',
            position: 'vertical'
          },
          {
            src: '/images/last-works-slider/16.jpg',
            srcBlur: '/images/last-works-slider/16-blur.jpg',
            position: 'vertical'
          }
        ],
        [
          {
            src: '/images/last-works-slider/17.jpg',
            srcBlur: '/images/last-works-slider/17-blur.jpg',
            position: 'vertical'
          },
          {
            src: '/images/last-works-slider/18.jpg',
            srcBlur: '/images/last-works-slider/18-blur.jpg',
            position: 'vertical'
          },
          {
            src: '/images/last-works-slider/9.jpg',
            srcBlur: '/images/last-works-slider/9-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/10.jpg',
            srcBlur: '/images/last-works-slider/10-blur.jpg',
            position: 'horizontal'
          },
        ],
        [
          {
            src: '/images/last-works-slider/19.jpg',
            srcBlur: '/images/last-works-slider/19-blur.jpg',
            position: 'vertical'
          },
          {
            src: '/images/last-works-slider/11.jpg',
            srcBlur: '/images/last-works-slider/11-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/12.jpg',
            srcBlur: '/images/last-works-slider/12-blur.jpg',
            position: 'horizontal'
          },
          {
            src: '/images/last-works-slider/20.jpg',
            srcBlur: '/images/last-works-slider/20-blur.jpg',
            position: 'vertical'
          }
        ]
      ],
      elements: {
        prev: null,
        main: null,
        next: null,
      },
      components: [],
    }
  },
  computed: {
    maxElements() {
      return this.items.length - 1;
    },
    style() {
      return {
        transform: 'translate3d(' + this.offset + 'px, 0, 0)'
      }
    },
    mobileNavStyle() {
      const percents = 100 / this.items.length;
      let result = {
        width: percents + '%'
      }
      if (!this.$refs.line) {
        const offset = this.offset / this.maxOffset * 100;
        result.transform = 'translate3d(' + offset + 'px, 0,0)';
        return result;
      } else {
        const width = this.$refs.line.clientWidth;
        const piece = width * (percents / 100);
        const offset = (width - piece) * (this.offset / this.maxOffset);
        result.transform = 'translate3d(calc(' + offset + 'px), 0,0)';
        return result;
      }

    }
  },
  mounted() {
    this.initComponents();
    window.addEventListener('resize', () => {
      this.dropComponents();
      this.initComponents();
    })
  },
  methods: {
    moveMobile(e) {
      const width = this.$refs.line.clientWidth;
      const offsetX = e.offsetX;
      this.offset = this.maxOffset * (offsetX / width);
    },
    dropComponents() {
      for (let key in this.components) {
        if (this.components.hasOwnProperty(key) && this.components[key]) {
          this.components[key].$el.remove();
          this.components[key].$destroy();
          this.components[key] = null;
        }
      }
      document.removeEventListener('mouseup', this.mouseUp);
      document.removeEventListener('touchend', this.touchEnd);
      this.maxOffset = 0;
    },
    initComponents() {
      if (window.innerWidth >= 992) {
        this.renderLine();
        this.renderLine('prev');
        this.renderLine('next');
        document.addEventListener('mouseup', this.mouseUp);
      } else {
        document.addEventListener('touchend', this.touchEnd);
        let photos = document.querySelector('.ddb-slider__photos--mobile');
        let container = document.querySelector('.ddb-last-works__body');
        this.maxOffset = (photos.clientWidth - container.clientWidth) * -1;
      }
    },
    touchStart(e) {
      this.startPosition = e.touches[0].pageX;
      this.oldOffset = this.offset;
      document.addEventListener('touchmove', this.touchMove)
    },
    touchMove(e) {
      const distance = e.touches[0].pageX - this.startPosition;
      let newOffset = this.offset;
      newOffset = distance + this.oldOffset;
      if (newOffset >= 0) {
        this.offset = 0;
        return false;
      } else if (newOffset <= this.maxOffset) {
        this.offset = this.maxOffset;
        return false;
      }
      this.offset = newOffset;
      return false;
    },
    touchEnd() {
      document.removeEventListener('touchmove', this.touchMove)
    },
    mouseDown(e) {
      this.startPosition = e.pageX;
      this.scrolling = true;
      document.addEventListener('mousemove', this.moving);
    },
    mouseUp(e) {
      document.removeEventListener('mousemove', this.moving);
      this.endPosition = e.pageX;
      this.offset = e.clientX - this.startPosition;
      if (this.offset < 0 && this.offset <= -60) {
        const position = this.getNext(this.current);
        this.move(position);
      } else if (this.offset > 0 && this.offset >= 60) {
        const position = this.getPrev(this.current);
        this.move(position);
      }
      for (let key in this.components) {
        if (this.components.hasOwnProperty(key) && this.components[key]) {
          this.components[key].setOffset(0);
        }
      }
      this.startPosition = 0;
      this.endPosition = 0;
      this.scrolling = false;
    },
    moving(e) {
      this.offset = e.clientX - this.startPosition;
      for (let key in this.components) {
        if (this.components.hasOwnProperty(key) && this.components[key]) {
          this.components[key].setOffset(this.offset);
        }
      }
    },
    renderLine(position = 'main') {
      const ComponentClass = Vue.extend(DDBSliderLine);

      this.components[position] = new ComponentClass({
        propsData: {items: this.items}
      });

      this.components[position].$mount();
      this.components[position].changePosition(position);
      this.components[position].$on('move', this.move)
      const tab = document.querySelector('.ddb-slider__photos--desktop');
      tab.appendChild(this.components[position].$el);
    },
    move(direction) {
      if (window.innerWidth < 992) {
        return;
      }
      let line;
      let position;
      if (Number.isInteger(direction)) {
        if (this.current === 0 && direction === this.maxElements) {
          line = 'prev';
          position = direction;
        } else if (this.current === this.maxElements && direction === 0) {
          line = 'next';
          position = direction;
        } else {
          line = 'main';
          position = direction;
        }
      } else {
        line = direction.line;
        position = direction.position;
      }
      if (line === 'main') {
        this.current = position;
        for (let key in this.components) {
          if (this.components.hasOwnProperty(key) && this.components[key]) {
            this.components[key].setCurrent(this.current);
          }
        }
      } else {
        const backDirection = this.getBackDirection(line);
        this.current = position;
        this.components[backDirection].$el.remove();
        this.components[backDirection].$destroy();

        this.components[line].changePosition('main');
        this.components.main.changePosition(backDirection);
        this.components[backDirection] = this.components.main;
        this.components.main = this.components[line];
        this.renderLine(line);
        for (let key in this.components) {
          if (this.components.hasOwnProperty(key) && this.components[key]) {
            this.components[key].setCurrent(this.current);
          }
        }
      }
    },
    getBackDirection(direction) {
      return direction === 'prev' ? 'next' : 'prev';
    },
    getPrev(index) {
      if (this.items[index - 1]) {
        return index - 1;
      }
      return this.maxElements;
    },
    getNext(index) {
      if (this.items[index + 1]) {
        return index + 1;
      }
      return 0;
    },
  },
}
</script>

<style scoped lang="scss">
.ddb-slider {
  height: 450px;
  position: relative;

  &__photos {
    position: absolute;
    height: 423px;
    width: max-content;
    display: flex;
    &--desktop {
      display: none;
    }
  }

  &__scroller {
    position: absolute;
    display: flex;
    width: 100%;
    height: 2px;
    bottom: 3px;
  }

  &__line {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $primary-color1;
    opacity: 0.3;
  }

  &__nav {
    height: 100%;
    background: $primary-color1;
    position: absolute;
    &--desktop {
      display: none;
    }
  }

  &__item {
    height: 100%;
    display: flex;
    margin-left: 16px;
    &--active, &:first-child {
      margin: 0;
    }
  }

  &__group {
    padding-right: 16px;
    &:last-child {
      padding-right: 0;
    }
    &--vertical {
      width: 80vw;
      max-width: 288px;
      height: 100%;
    }
    &--horizontal {
      min-width: 384px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .ddb-image {
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

}

@include for-large {
  .ddb-slider {
    height: 585px;
    &__scroller {
      position: absolute;
      display: flex;
      width: 100%;
      height: 2px;
      bottom: 20px;
      background: none;
      opacity: 1;
    }
    &__nav {
      flex: 1 1 0;
      background: $primary-color1;
      opacity: 0.3;
      cursor: pointer;
      position: relative;
      &--active {
        opacity: 1;
      }
      &--desktop {
        display: block;
      }
      &--mobile {
        display: none;
      }
    }
    &__line {
      display: none;
    }
    &__photos {
      height: 540px;
      width: 100%;
      &--desktop {
        display: flex;
      }
      &--mobile {
        display: none;
      }
    }
  }
}
</style>
