<template>
  <div class="ddb-layout">
    <ddb-header></ddb-header>
    <nuxt/>
  </div>
</template>

<script>
  import DDBHeader from "../components/DDBHeader";
  export default {
    components: {
      'ddb-header': DDBHeader,
    }
  }
</script>
<style>
  @media all and (orientation: landscape) {

  }

  @media all and (orientation: portrait) {
    .ddb-layout{
      min-width: 100vh;
    }
  }
</style>

