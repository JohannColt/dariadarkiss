<template>
  <div :data-index="index" @click="change()" :style="style" :class="styleClasses" class="ddb-slide">
    <template v-if="isVisible">
      <template v-for="(image, k) in renderedItems">
        <div :key="k" v-if="image.position === 'vertical'" class="ddb-slide__group ddb-slide__group--vertical">
          <ddb-image class="ddb-slide__image" :url="image.src"/>
        </div>
        <div :key="k" v-else-if="k === 0 || renderedItems[k - 1].position !== 'horizontal'"
             class="ddb-slide__group ddb-slide__group--horizontal">
          <ddb-image class="ddb-slide__image" :url="image.src"/>
          <ddb-image class="ddb-slide__image" :url="renderedItems[k + 1].src"/>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import DDBImage from "@/components/slider/DDBImage";

export default {
  name: "DDBSliderItem",
  components: {
    'ddb-image': DDBImage,
  },
  data() {
    return {
      positions: {
        0: -200,
        1: -100,
        2: 0,
        3: 100,
        4: 200
      },
      currentPosition: 0,
      classes: {
        0: 'ddb-slide--first',
        1: 'ddb-slide--prev',
        2: 'ddb-slide--center',
        3: 'ddb-slide--next',
        4: 'ddb-slide--last'
      },
      position: 0,
      pastPosition: 0,
      visiblePositions: [1, 2, 3],
      interval: null
    }
  },
  props: {
    renderedItems: {
      type: Array,
      default() {
        return []
      }
    },
    index: {
      type: Number,
      default: 0
    },
    maxElements: {
      type: Number,
      default: 0
    },
    stringPosition: {
      type: String,
      default() {
        return 'start';
      }
    }
  },
  created() {
    this.position = this.stringPosition === 'start' ? 0 : 4;
    this.currentPosition = this.positions[this.position];
    this.pastPosition = this.position;
  },
  computed: {
    style() {
      return {
        transform: 'translate(' + this.positions[this.position] + '%)'
      };
    },
    styleClasses() {
      return ['ddb-slide', this.classes[this.position]];
    },
    isVisible() {
      return this.visiblePositions.includes(this.position);
    }
  },
  methods: {
    change() {
      return this.$emit('change-index', this.index);
    },
    move() {
      let position = this.positions[this.position];
      const distance = 10;
      if (position < this.currentPosition) {
        this.currentPosition -= distance;
      } else if (position > this.currentPosition) {
        this.currentPosition += distance;
      } else {
        clearInterval(this.interval)
      }
    },
    toLeft() {
      this.position--;
      setInterval(this.move, 100)
    },
    toRight() {
      this.position++;
    }
  }
}
</script>

<style scoped lang="scss">

.ddb-slide {
  height: 100%;
  display: flex;
  padding: 0 16px;

  &--active, &:first-child {
    padding: 0;
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

@include for-large() {
  .ddb-slide {
    position: absolute;
    min-width: 100%;
    transition: transform 1s;
    padding: 0 8.5px;
    opacity: 0.6;
    filter: blur(10px);
    will-change: transform;

    &:hover {
      cursor: pointer;
      filter: unset;
      opacity: 1;
    }

    &--center {
      transform: translateX(0);
      opacity: 1;
      padding: 0;
      filter: unset;
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
