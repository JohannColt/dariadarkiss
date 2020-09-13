<template>
  <div :data-index="index" @mousedown="mouseDown" @mouseup="mouseUp" :style="style" :class="styleClasses" class="ddb-slide">
    <template v-if="isVisible">
      <template v-for="(image, k) in renderedItems">
        <div :key="k" v-if="image.position === 'vertical'" class="ddb-slide__group ddb-slide__group--vertical">
          <ddb-image class="ddb-slide__image" :url="image.src"/>
          <ddb-image class="ddb-slide__image--blur" :url="image.srcBlur"/>
        </div>
        <div :key="k" v-else-if="k === 0 || renderedItems[k - 1].position !== 'horizontal'"
             class="ddb-slide__group ddb-slide__group--horizontal">
          <ddb-image class="ddb-slide__image" :url="image.src"/>
          <ddb-image class="ddb-slide__image--blur" :url="image.srcBlur"/>
          <ddb-image class="ddb-slide__image" :url="renderedItems[k + 1].src"/>
          <ddb-image class="ddb-slide__image--blur" :url="renderedItems[k + 1].srcBlur"/>
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
        0: 0,
        1: 100,
        2: 200,
        3: 300,
        4: 400
      },
      classes: {
        0: 'ddb-slide--first',
        1: 'ddb-slide--prev',
        2: 'ddb-slide--center',
        3: 'ddb-slide--next',
        4: 'ddb-slide--last'
      },
      position: 0,
      pastPosition: 0,
      interval: null,
      animation: false,
      hover: false,
      willBeTrigerred: false
    }
  },
  props: {
    currentPosition: {
      type: Number,
      default: 0
    },
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
    linePosition: {
      type: String,
      default() {
        return 'main'
      }
    }
  },
  computed: {
    style() {
      return {
        transform: 'translate(' + this.positions[this.index] + '%)'
      };
    },
    styleClasses() {
      let resultClass = ['ddb-slide'];
      if (this.currentPosition === this.index) {
        resultClass.push('ddb-slide--center');
      }
      if (this.isBlur) {
        resultClass.push('ddb-slide--blur')
      }
      return resultClass.join(' ');
    },
    isBlur() {
      if (this.hover) {
        return true;
      }
      return this.index !== this.currentPosition;
    },
    isVisible() {
      if ((this.currentPosition === 0 || this.currentPosition === 1)
        && this.linePosition === 'prev'
        && (this.index === this.maxElements - 1 || this.index === this.maxElements - 2)) {
         return true;
      }
      if ((this.currentPosition === this.maxElements - 1 || this.currentPosition === this.maxElements - 2)
        && this.linePosition === 'next'
        && (this.index === 0 || this.index === 1)) {
        return true;
      }
      const r = Math.abs(this.index - this.currentPosition);
      return r <= 2
    },
  },
  methods: {
    change() {
      return this.$emit('change-index', this.index);
    },
    mouseDown() {
      this.willBeTrigerred = this.currentPosition !== this.index;
    },
    mouseUp() {
      if (this.willBeTrigerred) {
        return this.$emit('change-index', this.index);
      }
    }
  },
  watch: {
    currentPosition() {
      // this.animation = true;
      // setTimeout(() => {this.animation = false}, 1000);
    }
  }
}
</script>

<style scoped lang="scss">

.ddb-slide {
  height: 100%;
  display: flex;
  padding: 0 16px;

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
    transition: transform 1s ease;
    will-change: transform, opacity, filter;


    &--center {
      transform: translateX(0);
      opacity: 1;
      padding: 0;
      filter: unset;
    }
    .ddb-slide__image--blur {
      display: none;
    }
    &--blur {
      opacity: 0.6;
      .ddb-slide__image {
        display: none;
      }
      .ddb-slide__image--blur {
        display: block;
      }
    }
    &--animation {
      opacity: 1;
      filter: unset;
    }
    &:hover {
      transition: 0s;
      cursor: pointer;
      filter: blur(0);
      opacity: 1;
      .ddb-slide__image {
        display: block;
      }
      .ddb-slide__image--blur {
        display: none;
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
