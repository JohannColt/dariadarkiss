<template>
  <section class="container">
    <div class="main-page">
      <ddb-main-slider/>
      <ddb-second-block/>
    </div>
  </section>
</template>

<script>
import DDBSecondBlock from "../components/DDBSecondBlock";
import DDBMainSlider from "../components/DDBMainSlider";

  export default {
    components: {
      'ddb-second-block': DDBSecondBlock,
      'ddb-main-slider': DDBMainSlider
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

