<template>
  <section class="container">
    <div class="main-page">
      <ddb-second-block/>
      <ddb-main-slider/>
      <h1 class="title">
        dariadarkiss
      </h1>
      <h2 class="subtitle">
        Portfolio site
      </h2>
    </div>
  </section>
  <div class="main-page">
    <ddb-main-slider/>
  </div>
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

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-size: 60px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>

