<template>
  <div class="ddb-slider">

    <div class="ddb-slider__photos ddb-slider__photos--desktop">
    </div>

    <div class="ddb-slider__photos ddb-slider__photos--mobile">
      <div v-for="(images, key) in items" :key="key" class="ddb-slider__item ddb-slider__item--active">
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
           :class="['ddb-slider__nav', current === key ? 'ddb-slider__nav--active': '']"/>
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
  mounted() {
    this.renderLine();
    this.renderLine('prev');
    this.renderLine('next');
  },
  methods: {
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
      if (Number.isInteger(direction)) {
        this.current = direction;
        for (let key in this.components) {
          if (this.components.hasOwnProperty(key) && this.components[key]) {
            this.components[key].setCurrent(this.current);
          }
        }
      }else if (direction.line === 'main') {
        this.current = direction.position;
        for (let key in this.components) {
          if (this.components.hasOwnProperty(key) && this.components[key]) {
            this.components[key].setCurrent(this.current);
          }
        }
      } else {
        const backDirection = this.getBackDirection(direction.line);
        this.current = direction.position;
        this.components[backDirection].$el.remove();
        this.components[backDirection].$destroy();

        this.components[direction.line].changePosition('main');
        this.components.main.changePosition(backDirection);
        this.components[backDirection] = this.components.main;
        this.components.main = this.components[direction.line];
        this.renderLine(direction.line);
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
      return this.items.length - 1;
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
    width: 100%;
    display: flex;
    &--desktop {
      display: none;
    }
  }

  &__item {
    height: 100%;
    display: flex;
    padding: 0 16px;
    &--active, &:first-child {
      padding: 0;
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
    }
    &__nav {
      flex: 1 1 0;
      background: $primary-color1;
      opacity: 0.3;
      cursor: pointer;
      &--active {
        opacity: 1;
      }
    }
    &__photos {
      height: 540px;
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
