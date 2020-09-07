<template>
  <div class="ddb-slider-line" :style="style">
    <template v-if="ownPosition === 'prev'">
      <template v-for="(item, key) in items">
        <ddb-slide @change-index="move"
                   :current-position="currentElement"
                   :key="key + 'prev'"
                   :rendered-items="item"
                   :index="key"
                   :is-visible="isVisible && key===items.length - 1"
                   :is-current="false"
                   :line-position="ownPosition"
                   :max-elements="items.length"
        />
      </template>
    </template>
    <template v-else-if="ownPosition === 'next'">
      <template v-for="(item, key) in items">
        <ddb-slide @change-index="move"
                   :current-position="currentElement"
                   :key="key + 'next'"
                   :rendered-items="item"
                   :index="key"
                   :is-current="false"
                   :is-visible="isVisible && key===0"
                   :line-position="ownPosition"
                   :max-elements="items.length"
        />
      </template>
    </template>
    <template v-else>
      <template v-for="(item, key) in items">
        <ddb-slide @change-index="move"
                   :current-position="currentElement"
                   :key="key"
                   :rendered-items="item"
                   :index="key"
                   :line-position="ownPosition"
                   :max-elements="items.length"
        />
      </template>
    </template>
  </div>
</template>

<script>
import DDBSliderItem from "@/components/slider/DDBSliderItem";

export default {
  name: "DDBSliderLine",
  components: {
    'ddb-slide': DDBSliderItem
  },
  data() {
    return {
      ownPosition: 'main',
      currentElement: 0,
    }
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    style() {
      let styles = {};
      if (this.ownPosition === 'prev') {
        if (this.currentElement > 1) {
          styles.transition = 'unset';
        }
        styles.transform = 'translate3d(-'+ this.prevX * 100 + '%, 0, 0)';
      } else if (this.ownPosition === 'next') {
        if (this.currentElement <= this.items.length - 2) {
          styles.transition = 'unset';
        }
        styles.transform = 'translate3d(' + this.nextX * 100 + '%, 0, 0)';

      } else {
        styles.transform = 'translate3d(-' + this.currentElement * 100 + '%, 0, 0)';
      }
      return styles;
    },
    isVisible() {
      if (this.ownPosition === 'next') {
        return this.currentElement > this.items.length - 3;
      } else if (this.ownPosition === 'prev') {
        return this.currentElement <= 1;
      }
      return true;
    },
    nextX() {
      return this.items.length - this.currentElement;
    },
    prevX() {
      return 1 + this.currentElement + (this.items.length - 1);
    },
    prevPosition(index) {
      if (index === 0) {
        return 0;
      }
      return index - 1;
    },
    nextPosition(index) {
      if (index === this.items.length) {
        return 0
      }
      return index + 1;
    }
  },
  methods: {
    changePosition(newPosition) {
      this.ownPosition = newPosition;
    },
    move(index) {
      this.$emit('move', {
        line: this.ownPosition,
        position: index
      });
    },
    setCurrent(index) {
      this.currentElement = index;
    }
  }
}
</script>

<style scoped lang="scss">
  .ddb-slider-line {
    min-width: 100%;
    position: absolute;
    height: 100%;
    transition: transform 1s ease;
    will-change: transform;
  }
</style>
