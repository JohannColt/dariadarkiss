<template>
  <div class="ddb-slider">
    <div class="ddb-slider__photos">
      <div v-for="(item, key) in items" :key="key" :class="getClassForItem(key)">
        <img
          src="https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          alt="img">
      </div>
    </div>
    <div class="ddb-slider__scroller">

    </div>
  </div>
</template>

<script>
export default {
  name: "DDBSlider",
  data() {
    return {
      activeItem: 0,
      items: [
        [],
        [],
        []
      ]
    }
  },
  methods: {
    getClassForItem(index) {
      if (index !== this.activeItem) {
        return 'ddb-slider__item'
      } else {
        return 'ddb-slider__item ddb-slider__item--active'
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
  }

  &__item {
    height: 100%;
    min-width: 100%;
    background: rebeccapurple;
    opacity: 0.6;
    filter: blur(10px);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    &--active {
      filter: unset;
      opacity: 1;
    }
  }

}

@include for-desktop-up {
  .ddb-slider {
    height: 565px;

    &__photos {
      height: 540px;
    }
  }
}
</style>
