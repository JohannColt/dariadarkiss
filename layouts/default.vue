<template>
  <div class="ddb-layout">
    <transition name="ddb-animation-header">
      <ddb-header v-if="showHeader"></ddb-header>
    </transition>
    <nuxt/>
  </div>
</template>

<script>
  import DDBHeader from "../components/DDBHeader";

  export default {
    data() {
      return {
        showHeader: false,
      }
    },
    components: {
      'ddb-header': DDBHeader,
    },
    mounted() {
      if (window.innerWidth < 1200) {
        this.showHeader = true;
      }
      setTimeout(this.displayHeader, 850);
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    },
    methods: {
      displayHeader() {
        this.showHeader = true;
      }
    }
  }
</script>
<style lang="scss" scoped>
.ddb-animation-header-enter {
  transform: translateY(-80px);
}

.ddb-animation-header-enter-active {
  transition: all 0.5s ease;
}
</style>

