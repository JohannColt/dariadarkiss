<template>
  <div :data-index="index" @click="change()" :style="style" class="ddb-slide">
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
        0: '-200%',
        1: '-100%',
        2: '0',
        3: '100%',
        4: '200%'
      },
      position: 0
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
    stringPosition: {
      type: String,
      default() {
        return 'start';
      }
    }
  },
  created() {
    this.position = this.stringPosition === 'start' ? 0 : 4;
  },
  computed: {
    style() {
      let result = {
        transform: 'translateX(' + this.positions[this.position] + ')'
      }
      if (this.position !== 2) {
        result.opacity = 0.6;
        result.filter = 'blur(10px)'
      }
      return result;
    }
  },
  methods: {
    change() {
      return this.$emit('change-index', this.index);
    },
    toLeft() {
      this.position--;
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
    transition: 1s;
    padding: 0 8.5px;

    &:hover {
      cursor: pointer;
      filter: unset;
      opacity: 1;
    }

    &--active {
      filter: unset;
      opacity: 1;
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
