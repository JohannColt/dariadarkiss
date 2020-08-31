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
    </div>
  </div>
</template>

<script>
import DDBImage from "@/components/slider/DDBImage";
import Vue from 'vue';
import DDBSliderItem from "@/components/slider/DDBSliderItem";

export default {
  name: "DDBSlider",
  components: {
    'ddb-image': DDBImage
  },
  data() {
    return {
      current: 0,
      maxElements: 5,
      items: [
        [
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          },
        ],
        [
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          }
        ],
        [
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
        ],
      ],
      elements: [],
      activeElement: null,
      prevElement: null,
      nextElement: null,
      components: []
    }
  },
  mounted() {
    this.renderItem(this.getNext(this.getNext(this.current)), 'start');
    this.renderItem(this.getNext(this.current), 'start');
    this.renderItem(this.current, 'start');
    this.renderItem(this.getPrev(this.current), 'start');
    this.renderItem(this.getPrev(this.getPrev(this.current)), 'start');
  },
  methods: {
    renderItem(index, position) {
      const ComponentClass = Vue.extend(DDBSliderItem);

      const instance = new ComponentClass({
        propsData: { index: index, renderedItems: this.items[index], stringPosition: position }
      });
      instance.$mount();
      instance.$on('change-index', this.change)
      this.move(position === 'start' ? 'right' : 'left');
      const tab = document.querySelector('.ddb-slider__photos--desktop');
      if (position === 'start') {
        this.components.unshift(instance);
        tab.prepend(instance.$el);
      } else {
        this.components.push(instance);
        tab.appendChild(instance.$el);
      }
      this.destroy(position)

    },
    destroy(position) {
      if (this.components.length > this.maxElements) {
        let element = position === 'start' ? this.components.pop() : this.components.shift();
        element.$destroy();
      }
    },
    move(direction) {
      this.components.forEach((component) => {
        if (direction === 'left')
          component.toLeft();
        else {
          component.toRight();
        }
      });
    },
    change(index) {
      if (index === this.current) {
        return
      }
      if (index === this.getPrev(this.current)) {
        this.renderItem(this.getPrev(this.getPrev(index)),'start')
      } else {
        this.renderItem(this.getNext(this.getNext(index)), 'end')
      }
      this.current = index;
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
  computed: {
    style() {
      return {
        '--translate-x': ((this.direction + 1) * -100) + '%'
      }
    }
  }
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
  @keyframes left-to-right {
    0% {
      animation-timing-function: ease;
      transform: translateX(-100%);
    }
    50% {
      animation-timing-function: ease;
      transform: translateX(-200%);
    }
    51% {
      animation-timing-function: step-start;
      transform: translateX(200%);
    }
    52% {
      animation-timing-function: ease;
      transform: translateX(200%);
    }
    100% {
      animation-timing-function: linear;
      transform: translateX(100%);
    }
  }
  @keyframes right-to-left {
    0% {
      animation-timing-function: ease;
      transform: translateX(100%);
    }
    50% {
      animation-timing-function: ease;
      transform: translateX(200%);
    }
    51% {
      animation-timing-function: step-start;
      transform: translateX(-200%);
    }
    52% {
      animation-timing-function: ease;
      transform: translateX(-200%);
    }
    100% {
      animation-timing-function: ease;
      transform: translateX(-100%);
    }
  }
  .ddb-slider {
    height: 565px;

    &__photos {
      height: 540px;
      transform: translateX(var(--translate-x, 0%));
      transition: 1s;
      &--desktop {
        display: flex;
      }
      &--mobile {
        display: none;
      }
    }

    &__item {
      position: absolute;
      filter: blur(10px);
      min-width: 100%;
      opacity: 0.6;
      transition: opacity 0s, transform 1s;
      padding: 0 8.5px;
      &:hover {
        cursor: pointer;
        filter: unset;
        opacity: 1;
      }
      &--active {
        filter: unset;
        opacity: 1;
        padding: 0 8.5px;
        z-index: 1;
      }
      &--prev-to-next {
        animation-duration: 1s;
        animation-name: left-to-right;
        transform: translateX(100%);
      }
      &--next-to-prev {
        animation-duration: 1s;
        animation-name: right-to-left;
        transform: translateX(-100%);
      }
      &--next {
        transform: translateX(100%);
      }
      &--prev {
        transform: translateX(-100%);
      }
    }
    &__group {
      &--vertical {
        min-width: 30%;
        height: 100%;
      }
      &--horizontal {
        min-width: 40%;
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
}
</style>
