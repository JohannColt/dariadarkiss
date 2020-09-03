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
      <div v-for="(_, key) in items" :key="key" @click="change(key)"
           :class="['ddb-slider__nav', current === key ? 'ddb-slider__nav--active': '']"/>
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
            src: 'https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1533079047304-3997643590ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80',
            position: 'vertical'
          },
        ],
        [
          {
            src: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1537526045572-fca8beed2a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=2251&q=80',
            position: 'vertical'
          }
        ],
        [
          {
            src: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/photo-1537526045572-fca8beed2a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=2251&q=80',
            position: 'vertical'
          }
        ],
        [
          {
            src: 'https://images.unsplash.com/photo-1537346439163-eafb59bdc400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1936&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/photo-1537526358797-e732f762d6af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=2100&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/photo-1535459548739-91d8b0a25e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1537531579368-1af433cf6f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwMjc5NH0&auto=format&fit=crop&w=2100&q=80',
            position: 'horizontal'
          },
        ],
        [
          {
            src: 'https://images.unsplash.com/photo-1531278329486-539bf3bd6d5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80',
            position: 'vertical'
          },
          {
            src: 'https://images.unsplash.com/photo-1540039452455-b76ea34cf66a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1539965328219-31bf451f214d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'horizontal'
          },
          {
            src: 'https://images.unsplash.com/photo-1539665315126-4cadf53fb20d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            position: 'vertical'
          }
        ]
      ],
      elements: [],
      activeElement: null,
      prevElement: null,
      nextElement: null,
      components: []
    }
  },
  created() {
    if (this.items.length < 5) {
      this.maxElements = 5;
    } else {
      this.maxElements = this.items.length;
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
        element.$el.remove();
      }
    },
    move(direction) {
      this.components.forEach((component) => {
        if (direction === 'left') {
          component.toLeft();
        } else {
          component.toRight();
        }
      });
    },
    change(index) {
      if (index === this.current) {
        return
      }
      const steps = index - this.current;
      if (index === this.getPrev(this.current)) {
        this.renderItem(this.getPrev(this.getPrev(index)),'start')
        this.current = index;
      } else if (index === this.getNext(this.current)) {
        this.renderItem(this.getNext(this.getNext(index)), 'end')
        this.current = index;
      } else if (steps > 0) {
        for (let i = 1; i <= Math.abs(steps); i++) {
          this.renderItem(this.getNext(this.getNext(this.current + 1)), 'end');
          this.current++;
        }
      } else {
        for (let i = 1; i <= Math.abs(steps); i++) {
          this.renderItem(this.getPrev(this.getPrev(this.current - 1)), 'start');
          this.current--;
        }
      }
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
      flex: 1 1 0px;
      background: $primary-color1;
      opacity: 0.3;
      cursor: pointer;
      &--active {
        opacity: 1;
      }
    }
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
  }
}
</style>
